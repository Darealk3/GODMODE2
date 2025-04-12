const {
  default: makeWASocket,
  useSingleFileAuthState,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const P = require('pino');

const quotes = [
  "Believe in yourself!",
  "Push harder than yesterday if you want a different tomorrow.",
  "The best view comes after the hardest climb.",
  "Every day is a second chance.",
  "Dream big. Work hard. Stay focused."
];

const { state, saveState } = useSingleFileAuthState('./auth_info.json');

async function startBot() {
  const { version } = await fetchLatestBaileysVersion();
  const sock = makeWASocket({
    version,
    logger: P({ level: 'silent' }),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, P({ level: 'silent' }))
    },
    printQRInTerminal: true
  });

  // Auto-reply
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;
    const jid = msg.key.remoteJid;
    const text = msg.message.conversation || msg.message?.extendedTextMessage?.text || '';
    await sock.sendMessage(jid, { text: "👋 Hey! I'm your daily motivation bot. Stay awesome!" });
  });

  // Auto-view statuses
  sock.ev.on('messages.update', async updates => {
    for (let update of updates) {
      if (update.messageStubType === 32) { // 32 = status update
        const jid = update.key.remoteJid;
        await sock.readMessages([update.key]);
      }
    }
  });

  // Daily motivation every 24h
  setInterval(async () => {
    const chats = await sock.groupFetchAllParticipating();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const message = `🌞 *Daily Boost:*\n"${quote}"`;
    for (let jid in chats) {
      await sock.sendMessage(jid, { text: message });
    }
  }, 24 * 60 * 60 * 1000);

  sock.ev.on('creds.update', saveState);
}

startBot();
