import { chara } from 'hxz-api'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"displayName": "Arifzyn",
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;F;;;FN:F\nORG:F;\nTEL;type=CELL;type=VOICE;waid=62895347198105:+62 895-3471-98105\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}
    if (!text) throw `Use example ${usedPrefix}${command} Miku`
    let result = await chara(text)
let gambar = await(await fetch(result.getRandom())).buffer()
await conn.sendButton(m.chat, `Character ${text}`, author, gambar, [['Next', `${usedPrefix + command} ${text}`]], m, { quoted : q })
}
handler.help = ['chara']
handler.tags = ['anime']
handler.command = /^(chara)$/i

export default handler