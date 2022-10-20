import fetch from 'node-fetch'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	if (!text) throw `Input mirror_url.\n\n*Contoh :*\n${usedPrefix + command} https://www.mirrored.to/files/1UUNPYSV/[LENDRIVE]_Kinsou_no_Vermeil_-_08_[720p_HEVC][Dualsubs].mkv_links`
	if (text.includes('http://') || text.includes('https://')) {
		if (!text.includes('mirror')) return m.reply('Bukan web mirror kayanya itu')
		try {
			let res = await fetch(`https://api.lolhuman.xyz/api/mirrorcreator?apikey=${global.lolkey}&url=${text}`)
			let json = await res.json()
			let get_result = json.result
			let ini_txt = `[ *SUCCES* ]`
			for (let link of Object.keys(get_result)) {
				ini_txt += `\n\n[ ${link} ]\n`
				ini_txt += `${get_result[link]}`
			}
			m.reply(ini_txt)
		} catch (e) {
			console.log(e)
			m.reply(`The server encountered an internal error and was unable to complete your request`)
		}
	} else {
		m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
	}
}

handler.help = ['mirror <url>']
handler.tags = ['search']
handler.command = /^(mirror(ed|files?)?)$/i

handler.premium = true
handler.limit = true

export default handler