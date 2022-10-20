let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> global.db.data.users[m.sender].exp = 5737737373
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*SUKSES CHEAT LIMIT*', 'status@broadcast')
}
handler.command = /^(cheatexp)$/i
handler.owner = true

export default handler