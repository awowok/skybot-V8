let handler = async (m, { conn, text }) => {
  let tag = `@${m.sender.split`@`[0]}`
  conn.reply(m.chat, tag, m, { mentions: await conn.parseMention(tag) })
}
handler.help = ['tagme']
handler.tags = ['group']
handler.command = /^tagme$/i

handler.group = false

export default handler