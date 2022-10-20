import fetch from 'node-fetch'

let handler = async(m, { groupMetadata, command, conn, args, usedPrefix }) => {
let ps = groupMetadata.participants.map(v => v.id && !conn.user.jid && !m.sender)
if (!args[0]) throw 'Masukkan duid'
let a = ps.getRandom()
let user = global.db.data.users[m.sender].money
if (!args.length > 50) throw 'Kebanyakan'
let ora = global.db.data.users[a].money
let count = args[0]

let bjor = `Sukses Menyawer ke:
${'@' + a.split('@')[0]} Sebesar *Rp.${ora += count * 1}*
Uang keluar: *Rp.${user -= count * 1}*
Dari : *${conn.getName(m.sender)*
`
conn.reply(m.chat, bjor, m, { mentions: await conn.parseMention(bjor) })
}
handler.help = ['nyawer', 'sawer']
handler.tags = ['rpg']
handler.command = /^(nyawer|sawer)$/i

handler.group = true 

export default handler