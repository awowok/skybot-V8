import fetch from 'node-fetch'

let handler = async (m, { conn, text}) => {

   if (!text) throw 'Masukan Text Atau Link!!'
   
   let res = `https://api.neoxr.my.id/api/sshp?url=${text}&apikey=fF2U2S`
   await conn.sendFile(m.chat, res, 'ss.jpg', text, m)
}
handler.command = /^(sshp|sswebhp)$/i

export default handler