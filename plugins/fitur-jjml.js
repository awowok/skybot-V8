import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let res = await fetch('https://api-kaysa.herokuapp.com/api/jjml?apikey=EY34dKQu')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.video) throw 'Error!'
   conn.sendFile(m.chat, json.video, 'meme.mp4', `Random JJML`, m)
}
handler.help = ['jjml']
handler.tags = ['fun', 'internet']
handler.command = /^(jjml)$/i

handler.limit = true

export default handler