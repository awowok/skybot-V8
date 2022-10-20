import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} https://s.id`

let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/ssweb?apikey=${global.lolkey}&url=${text}`
await conn.sendButton(m.chat, `Ss Webs`, author, url, [['ℹ️ Menu', '.menu',]], null, adReply)

}
handler.help = ['ssweb url']
handler.command = ['ss', 'ssweb', 'ssf']
handler.tags = ['tools']

export default handler