let handler = async (m, { conn, text, usedPrefix, command }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let caption = `${conn.getName(m.sender)} S𝐞𝐤𝐚𝐫𝐚𝐧𝐠 L𝐚𝐠𝐢 𝐀𝐅𝐊${text ? ': ' + text : ''}`
    let kataafk = ['mau turu', 'mau nyolong', 'Ke rumah ayang', 'jagain lilin', 'beli pop es', 'kawin lari', 'main kelereng', 'petak umpet', 'push renk', 'push up joni', 'olahraga', 'onani', 'beraq', 'open bo', 'di suruh emak', 'kerja']
conn.sendButtonDoc(m.chat, caption, author, 'Ikut Afk', '.afk ' + kataafk.getRandom(), m, adReply)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
//tes