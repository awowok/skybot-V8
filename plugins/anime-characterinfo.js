import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan Nama Characternya!\nContoh: #chara Rimuru`
  try {
  let res = await fetch(`https://api.lolhuman.xyz/api/character?apikey=${global.lolkey}&query=${text}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, image, description } = json.result
let charaingfo = `[ *CHARACTER* ]
*Full:* ${name.full}
*Native:* ${name.native}
*L:* ${image.large}
*M:* ${image.medium}
*Description:* ${description}
`
  conn.sendFile(m.chat, image.large, '', charaingfo, m)
 } catch {
  m.reply('Tidak Ditemukan... :(\nMungkin Coba kata kunci lain?')
 }
}
handler.help = ['character']
handler.tags = ['anime']
handler.command = /^(character)$/i

handler.limit = true

export default handler