import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let res = await fetch('https://api-kaysa.herokuapp.com/api/meme?apikey=EY34dKQu')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.video) throw 'Error!'
  conn.sendButtonVid(m.chat, json.video, `*${htki} Meme MP4 ${htka}*
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, author, 'Netx', '.mememp4', fpayment, adReply)
}
handler.help = ['mememp4']
handler.tags = ['fun', 'internet']
handler.command = /^(mememp4)$/i

handler.limit = true

export default handler