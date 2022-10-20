let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (args[0] == 'reset') {
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 1000 : isNumber(args[0]) ? parseInt(args[0]) : 1000
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		conn.reply(m.chat, `*berhasil direset ${lim} / user*`, m)
		}
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let ke1 = global.db.data.users[who].limit
    let ke2 = global.db.data.users[who].exp
    let ke3 = global.db.data.users[who].money
    let cap = `
◎ Sisa Limit:
➥ *${ke1}*

◎ Sisa Exp:
➥ *${ke2}*

◎ Sisa Money
➥ *${ke3}*
`
conn.sendButtonDoc(m.chat, '𝐒𝐢𝐬𝐚 𝐋𝐢𝗺𝐢𝐭/𝐌𝗼𝐧𝐞𝐲', cap, 'Menu', '.menu', null, adReply)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}