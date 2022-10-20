let handler = async (m, { conn } => {
let hsl = `Hai Juga Kak @${m.sender.split`@`[0]}`
conn.reply(m.chat, hsl, m ,{ mentions: await conn.parseMention(hsl) })
}
handler.command = /^(hai)$/i

export default handler