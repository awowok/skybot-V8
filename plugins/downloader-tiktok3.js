import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  
  if (!text) return m.reply(`Use Example: ${usedPrefix+ command} https://vt.tiktok.com/ZSwWCk5o/`)
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolkey}&url=${text}`)
  let res2 = await res.json()
  let x = res2.result
  let cap = `• *Title :* ${x.title}
• *Description :* ${x.description}

𝐓𝐢𝐤𝐭𝗼𝐤 | 𝐁𝐲 𝐋𝗼𝐥𝐇𝐮𝗺𝐚𝐧`
conn.sendFile(m.chat, x.link, 'tiktok.mp4', cap, m)
}
handler.help = ['ttnowm']
handler.tags = ['downloader']
handler.command = /^(ttnowm)$/i

export default handler