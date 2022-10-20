let handler = async (m, { conn }) => {
let info = `
*${htki} MENU ${htka}*

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█ 
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

SILAHKAN PILIH SALAH 1 MENU 
DI BAWAH!!
`
const sections = [
   {
	title: `✃ LIST MENU`,
	rows: [
	    {title: "∫ 🧿» Simpel «", rowId: '.mw', description: `╰► Menu simpel ${global.wm}` },
	    {title: "∫ ⭐» Allmenu «", rowId: '.allmenu', description: `╰► Menu allmenu ${global.wm}` },
	    {title: "∫ 🌸» List Menu «", rowId: '#menulist', description: `╰► Menu Keceh ${global.wm}` },
	    {title: "∫ 👑» List Menu-2 «", rowId: '#m9', description: `╰► Menu Keceh ${global.wm}` },
	    {title: "∫ 🌸» List Menu-3 «", rowId: '#menu6', description: `╰► Menu Keceh ${global.wm}` },
        ]
        }, {
  title: `✃ OTHER `,
  rows: [
	    {title: "∫ 💎» Owner «", rowId: '.owner', description: `╰► Owner BOT WhatsApp` },
	     ]
	     },
]

const listMessage = {
  text: info,
  footer: author,
  title: null,
  buttonText: "LIST MENU ☁︎",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['listmenu'] 
handler.tags = ['menu']
handler.command = /^(listmenu)$/i
handler.private = false

export default handler