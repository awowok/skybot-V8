import fetch from 'node-fetch'
import { promisify } from 'util'
import _gis from 'g-i-s'
let gis = promisify(_gis)

let handler  = async (m, { conn, usedPrefix, command, args, text }) => {
  if (!text) return m.reply('Cari apa?\njangan nyari bok3p yaa, dosa 😖')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('Maaf image tidak ditemukan!')
  let sell = `
*───「 GOOGLE IMAGE 」───*

➤ *search :* ${text}
➢ *width :* ${width}
➢ *height :* ${height}
`
await conn.sendButtonImg(m.chat, url, sell, author, 'Next', `${usedPrefix}${command} ${text}`, m, { quoted : fkon })
}
handler.help = ['image <query>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i
handler.group = true
export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}