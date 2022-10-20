import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (global.db.data.users[m.sender].premiumTime < 1) return conn.sendButtonDoc(m.chat, `𝐅𝐈𝐓𝐔𝐑 𝐈𝐍𝐈 𝐊𝐇𝐔𝐒𝐔𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌!!`, botdate, '𝐁𝐮𝐲 𝐏𝐫𝐞𝗺𝐢𝐮𝗺', '.sewabot', m, adReply)
	if (!text) throw `uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} bokep🐒`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!\nawas jangan nonton beginian ya dek, nanti aku bilangin ke ibu kamu loh ><';
	try {
		let res = await (await fetch(`https://malesin.xyz/xnxxsearch?q=${text}`)).json()
		if (res.status !== 200) throw res;
	let row = Object.values(res.result).map((v, index) => ({
		title: v.title,
			description: v.info,
			rowId: usedPrefix + 'xnxxdl ' + v.link
	}))
	let buttons = {
			buttonText: 'Click Here',
			description: `${htjava} *Xnxx Search ${text}* ${htjava}\n\nSilahkan Pilih Di Bawah!!`,
			footerText: 'barang siapa yg sering melakukan onani, mohon tobatlah kalian!'
		}
 await conn.sendListM(m.chat, buttons, row, m)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ["xnxx", "xnxxsearch"].map(v => v + ' <query>')
handler.tags = ["downloader", "premium"]
handler.command = /^xnxx(s?earch)?$/i

handler.register = true

export default handler