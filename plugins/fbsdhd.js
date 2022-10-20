let handler = async (m, { conn, usedPrefix, command, text }) => {
let cap = `*Untuk Download Facebook*
*Silahkan Ketik :*

_*Download SD*_
${usedPrefix + command}sd Link/Url
Contoh:
${usedPrefix + command}sd https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/

_*Download HD :*_
${usedPrefix + command}hd Link/Url
Contoh :
${usedPrefix + command}hd https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/
`
await conn.send2ButtonDoc(m.chat, cap, author, 'SD', `.fbsd ${text}`, 'HD', `.fbhd ${text}`, m, adReply)
}
handler.command = /^(fb|facebook)$/i

export default handler