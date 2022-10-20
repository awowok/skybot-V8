import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => 
 {
  if (!text) throw `Masukan Query\n*Example:* ${usedPrefix + command} melukis senja`
  let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${global.lolkey}&query=${text}`)
  let res2 = await res.json()
  let cap = `*Hasil Pencarian Dari ${text}*\n`
  for (let json of res2.result) {
   cap += `
• *ID:* ${json.id} 
• *Link:* ${json.link}
• *Title:* ${json.title}
• *Duration:* ${json.duration}
• *Popularity:* ${json.popularity}
`
cap += '\n' + '⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯' + '\n'
  	}
  conn.reply(m.chat, cap, m)
}
handler.command = /^(spotsearch|spotifysearch|sysr)$/i

export default handler