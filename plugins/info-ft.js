let handler = async (m, { conn, text, usedPrefix, command }) => {
	let menu = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)

	let txt = `*Total Fitur : ${menu.length} Commands*`
	await m.reply(txt)
}

handler.help = ['ft']
handler.tags = ['tools']
handler.command = /^(ft)$/i

export default handler