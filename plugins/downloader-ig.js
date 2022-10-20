import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {

   if (!text) return m.reply(`Use example ${usedPrefix + command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`)
    let res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolkey}&url=${text}`)
    let json = await res.json()
    let { result } = json 
    await m.reply('Sedang di proses..')
    let cap = `_*Download From Instragram*_
    
*Instagram | ${global.author}*`
await conn.sendFile(m.chat, result[0], 'ig.mp4', cap, m)
}
handler.help = ['ig', 'instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|ig(dl)?)$/i

handler.premium = false
handler.group = false

export default handler