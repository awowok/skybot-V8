let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> global.db.data.users[m.sender].limit = Infinity
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*SUKSES CHEAT LIMIT*', 'status@broadcast')
}
handler.command = /^(cheatlimit)$/i
handler.owner = true

export default handler