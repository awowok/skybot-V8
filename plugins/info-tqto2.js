let handler = async (m, { conn, command } => {
conn.reply(m.chat, `Berikut Github ${command}\n\n• https://github.com/RifXz19`, fkon)
}
handler.command =  /^(arifzyn)$/i
export default handler