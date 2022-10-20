import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Usage : ${usedPrefix + command} kanji\n\n*Example: ${usedPrefix + command} 蛍*`

	let tes = text.replaceAll(' ','').replaceAll('\n','').split('')
	let pesan = `*Result :*`
	for (let x of tes) {
		let res = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(x)}`)
		let json = await res.json()
		let { kanji, grade, stroke_count, meanings, kun_readings, on_readings, name_readings, jlpt, unicode, heisig_en } = json
		pesan += `\n\nKanji : ${kanji}\n`
		pesan += `Arti : ${meanings}\n`
		pesan += `Kun-Reading : ${kun_readings}\n`
		pesan += `On-Reading : ${on_readings}\n`
		pesan += `Name Reading : ${name_readings}\n`
		pesan += `grade : ${grade}, stroke : ${stroke_count}, JLPT : ${jlpt}\n`
		pesan += `───────────────────`
	}
	conn.reply(m.chat, pesan, m)
}

handler.help = ['kanji']
handler.tags = ['info']
handler.command = /^(kanji)$/i

handler.premium = true
handler.limit = true

export default handler