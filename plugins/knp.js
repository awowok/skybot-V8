let handler  = async (m, { conn, usedPrefix: _p }) => {
await m.reply('Itu Tadi Di Oyo Ada Suara Aneh')
}
handler.customPrefix = /^(knp|kenapa)$/i
handler.command = new RegExp

export default handler