import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let res = await fetch('https://api-kaysa.herokuapp.com/api/husbu?apikey=EY34dKQu')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.anime) throw 'Error!'
   conn.sendFile(m.chat, json.anime, 'Husbu', `Husbu Klean`, m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

handler.limit = true

export default handler