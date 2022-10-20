let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> global.db.data.users[m.sender].level = 10000000000
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*SUKSES CHEAT LIMIT*', 'status@broadcast')
}
handler.command = /^(cheatlevel)$/i
handler.owner = true

export default handler