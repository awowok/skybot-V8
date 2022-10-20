/* 
* Minimal Jangan Di Ubah 
* Kasi Ke 
* Yang Ubh Anak Ytam Fix 
*/


let handler = async (m, { conn }) => {
let info = `
*${htki} TQTO ${htka}*

💌 Contributor Script Bot
`
const sections = [
   {
	title: `✃ THANKS TO`,
	rows: [
	    {title: "✨ Arifzyn", rowId: '.arifzyn', description: '╰►Kang Recode sc:v' },
	    {title: "✨ Kanna", rowId: '.kanna', description: '╰►Stah' },
	{title: "✨ Nurutomo", rowId: '.Nurutomo', description: '╰►Contributor' },
	{title: "✨ Adiwajshing", rowId: '.Adiwajshing', description: '╰►Contributor' },
	{title: "✨ Amirul", rowId: '.Amirul', description: '╰►Contributor' },
	{title: "✨ Bochilgaming", rowId: '.Bochilgaming', description: '╰►Penyedia Base' },
	{title: "✨ Syahrul", rowld: '.syahrul', description: '╰► Kang Fix In' },
	{title: "✨ WudySoft", rowld: '.wudy', description: '╰► Kang Fix In' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['tqto', 'contributor']
handler.tags = ['info']
handler.command = /^(tqto|thanksto|contributor)$/i
handler.private = false

export default handler