# GODMODE - WhatsApp AI Bot 🤖🔥

Your ultimate all-in-one WhatsApp bot powered by Baileys and Local AI.

---

## 🚀 Features

- 🎭 Image to Sticker conversion
- 💬 Auto React to messages
- 🎲 Truth or Dare game
- 💡 Motivational quotes
- 🎵 YouTube music/audio download (yt-dlp)
- 🧠 Local AI responses (LLaMA / Ollama)
- 📂 File upload detection
- 🕒 Daily scheduled messages
- 👥 Group join/leave notifications
- 👑 Admin tools (kick, ban, promote, demote)

---

## 🛠️ Setup

### 1. Install Node + Python Requirements
```bash
npm install
sudo apt install ffmpeg
pip install yt-dlp
```

### 2. Run the Bot
```bash
node index.js
```

### 3. Scan the QR code with your WhatsApp ✅

---

## 🤖 Local AI
This bot is designed to work with a local LLM (like [Ollama](https://ollama.com/)).

You can run:
```bash
ollama run llama3
```

And the bot will talk to it locally at `http://localhost:11434`.

---

## 📁 Folder Structure

```
.
├── index.js           # Main bot script
├── stickers/          # Custom .webp sticker images
├── auth_info.json     # Auto-generated after scanning QR
├── README.md
└── .gitignore
```

---

## 📜 Credits

- Built with [`@whiskeysockets/baileys`](https://github.com/WhiskeySockets/Baileys)
- Local AI by [`Ollama`](https://ollama.com/)
- YouTube downloader via [`yt-dlp`](https://github.com/yt-dlp/yt-dlp)

---

## ❤️ Made by [@Darealk3](https://github.com/Darealk3)