# WhatsApp Auto-Reply + Daily Motivation Bot 🤖✨

A WhatsApp bot that:
- Replies to all messages automatically
- Sends a motivational quote to all chats once a day
- Automatically views WhatsApp statuses

## 🚀 Features
- Built with `@whiskeysockets/baileys`
- Uses `auth_info.json` for authentication
- Daily quote feature (edit the quote list in `index.js`)
- Auto status view support

## 📦 Setup

```bash
npm install
node index.js
```

## 🌐 Deploy on Render
Use the included `render.yaml` file.

---

## 🛠️ Customize
- Quotes: inside `index.js`, modify the `quotes[]` array.
- Reply text: customize `sendMessage` in `messages.upsert`.

---

Made with ❤️ by Darealk3