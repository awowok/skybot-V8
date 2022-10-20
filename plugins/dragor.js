import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
	let res = await dragor()
	let listSections = []
	Object.values(res).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.judul, [
          ['Get Image', usedPrefix + 'get ' + v.thumb, '\n⌚ *By:* ' + author + '\n *Link:* ' + v.thumb]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 dragor Search 🔎 ' + htka, `⚡ Silakan pilih dragor Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `☂️ dragor Search Disini ☂️`, listSections, m)
    }
handler.help = ['dragor']
handler.tags = ['internet']
handler.command = /^dragor$/i

export default handler

/* New Line */
async function dragor() {
	return new Promise((resolve) => {
		axios.get('https://173.212.240.190/nodrakor-crazy-love/')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const thumb = [];
				const judul = [];
				const result = [];
				$('tbody > a').each(function(a, b) {
					if ($(b).attr('href').startsWith('https://')) {
					thumb.push($(b).attr('href'))
					}
				})
				$('tbody > td').each(function(a, b) {
					judul.push($(b))
				})
				for (let i = 0; i < thumb.length; i++) {
					result.push({
						thumb: thumb[i],
						judul: judul[i]
					})
				}
				resolve(result)
			})
	})
}