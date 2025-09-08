const { makeid } = require('./gen-id');
const express = require('express');
const QRCode = require('qrcode');
const fs = require('fs');
let router = express.Router();
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    jidNormalizedUser
} = require("@whiskeysockets/baileys");
const { upload } = require('./mega');
function removeFile(FilePath) {
    if (!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true });
}
router.get('/', async (req, res) => {
    const id = makeid();
 //   let num = req.query.number;
    async function MALVIN_XD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/' + id);
        try {
var items = ["Safari"];
function selectRandomItem(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
var randomItem = selectRandomItem(items);
            
            let sock = makeWASocket({
                	
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});
            
            sock.ev.on('creds.update', saveCreds);
            sock.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect,
                    qr
                } = s;
              if (qr) await res.end(await QRCode.toBuffer(qr));
                if (connection == "open") {
                    await delay(5000);
                    let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                    let rf = __dirname + `/temp/${id}/creds.json`;
                    function generateRandomText() {
                        const prefix = "3EB";
                        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                        let randomText = prefix;
                        for (let i = prefix.length; i < 22; i++) {
                            const randomIndex = Math.floor(Math.random() * characters.length);
                            randomText += characters.charAt(randomIndex);
                        }
                        return randomText;
                    }
                    const randomText = generateRandomText();
                    try {
                        const { upload } = require('./mega');
                        const mega_url = await upload(fs.createReadStream(rf), `${sock.user.id}.json`);
                        const string_session = mega_url.replace('https://mega.nz/file/', '');
                        let md = "masky~" + string_session;
                        let code = await sock.sendMessage(sock.user.id, { text: md });
                        let desc = `⚠️Do not share this id with anybody⚠️
 
┌┤✑  Thanks for using 𝐌𝐚𝐬𝐤𝐲_X𝐃
│└────────────┈ ⳹        
│©2024 𝐌𝐚𝐬𝐤𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐓𝐞𝐜𝐡
└─────────────────┈ ⳹

🎬 *MASKY XD V2.0 Full Setup Guide!*

🚀 Bug Fixes + New Commands + Fast AI Chat
📺 Watch Now:  https://youtu.be/CA7CfI-8Gpk✌🏻`; 
                        await sock.sendMessage(sock.user.id, {
text: desc,
contextInfo: {
externalAdReply: {
title: "MASKY-XD 𝕮𝖔𝖓𝖓𝖊𝖈𝖙𝖊𝖉",
thumbnailUrl: "https://youtu.be/CA7CfI-8Gpk",
sourceUrl: "https://whatsapp.com/channel/0029VbBeOQt7j6g5YFBmKR1o",
mediaType: 1,
renderLargerThumbnail: true
}  
}
},
{quoted:code })
                    } catch (e) {
                            let ddd = sock.sendMessage(sock.user.id, { text: e });
                            let desc = `⚠️Do not share this id with anybody⚠️
 
┌┤✑  Thanks for using 𝐌𝐚𝐬𝐤𝐲_X𝐃
│└────────────┈ ⳹        
│©2024 𝐌𝐚𝐬𝐤𝐲 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐓𝐞𝐜𝐡
└─────────────────┈ ⳹

🎬 *MASKY XD V2.0 Full Setup Guide!*

🚀 Bug Fixes + New Commands + Fast AI Chat
📺 Watch Now:  ✌🏻`; 
                            await sock.sendMessage(sock.user.i
