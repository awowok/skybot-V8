import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

   let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${global.lolkey}`)
   let json = await res.json()
   let p = json.result
   await m.reply('Tunngu Sedang Proses...')
   await conn.sendFile(m.chat, p.male, 'cppcp.jpg', 'Cowo', m)
   await conn.sendFile(m.chat, p.female, 'cppcp.jpg', 'Cewe', m)
}
handler.command = /^(cp)$/i

export default handler