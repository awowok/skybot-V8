let handler  = async (m, { conn, usedPrefix: _p }) => {
let money = global.db.data.users[m.sender].money
let cap = `*Your Dompet* = ${money}`
m.reply(cap)
}
handler.help = ['dompet']
handler.tags = ['exp']
handler.command = /^(dompet|dp)$/i

export default handler