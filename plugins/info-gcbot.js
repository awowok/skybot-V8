let handler  = async (m, { conn, usedPrefix: _p }) => {
let str = `
✧─────[ *Group Official* ]─────✧
🍀 Group 1 :
https://bit.ly/Arifzyn
✧──────────···──────────✧`
m.reply(str)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler