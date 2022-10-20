import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {

   if (!text) return m.reply(`*Example :* ${usedPrefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
   let res = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${global.lolkey}&url=${text}`)
   let res2 = await res.json()
   let x = res2.result
   let cap = ` *Found :* ${text}
   
• *Title :* ${x.title}
• *Artists :* ${x.artists}
• *Duration :* ${x.duration}
• *Popularity :* ${x.popularity}
`.trim()
 await conn.sendFile(m.chat, x.thumbnail, '', cap, m)
 await conn.sendMessage(m.chat, {document: { url: x.link }, mimetype: 'audio/mpeg', fileName: `${x.title}.mp3`}, { quoted : m })
}
handler.help = ['spotify']
handler.tags = ['downloader']
handler.command = /^(spotify)$/i

export default handler