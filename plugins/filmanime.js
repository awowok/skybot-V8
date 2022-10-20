import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)
	 let res = await fetch(`https://api.lolhuman.xyz/api/lk21?apikey=${global.lolkey}&query=${text}`)
	 let jsons = await res.json()
	 let x = jsons.result
let hasil = `*${htki} ANIME-SEARCH ${htka}*\n\n📫 Film Dari : ${x.title}
📮 Genre: : ${x.genre}
📮 Views: : ${x.views}
📮 Duration: : ${x.duration}
📮 Tahun: : ${x.tahun}
📮 Location: : ${x.location}
📮 Rilis: : ${x.date_release}
📮 Bahasa: : ${x.language}
⭐ Rating : ${x.rating}

🎥Link Movie : ${x.link_dl}
Link : ${x.link}

📖Sinopsis : ${x.desc}`
    await conn.reply(m.chat, wait, m)
    await conn.sendButton(m.chat, hasil, wm, x.thumbnail, [[' Menu', '/menu']], m)
}
handler.help = ['filmanime', 'film'].map(v => v + '<film>')
handler.tags = ['internet', 'anime']
handler.command = /^(film(anime)?)?$/i

export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}