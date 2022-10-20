import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {

   let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : 'Masukan Text nya Kak'
   let res = await fetch(`https://api.lolhuman.xyz/api/toloserti?apikey=${global.lolkey}&name=${teks}`)
   let fimgb = Buffer.from(await res.arrayBuffer())
 await conn.sendFile(m.chat, fimgb, 'tolol.jpg', 'Nih Kak', m)
}
handler.command = /^tol$/i

export default handler