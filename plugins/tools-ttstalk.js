import { TTScraper } from 'tiktok-scraper-ts'

const TikTokScraper = new TTScraper();

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input username'
	text = text.replace(/@/, '')
	const json = await TikTokScraper.user(text)
	let anu = JSON.parse(JSON.stringify(json, null, 4))
	let txt = `*Username : ${anu.uniqueId}*\n\n`
	txt += `bio >> ${anu.signature}\n\n`
	txt += `*Nickname :* ${anu.nickname}\n`
	txt += `*Followers :* ${anu.followers}\n`
	txt += `*Followings :* ${anu.following}\n`
	txt += `*Likes :* ${anu.hearts}\n`
	txt += `*Video :* ${anu.videos}\n\n`
	txt += `*Verified :* [ ${anu.verified} ]\n`
	txt += `*private account :* [ ${anu.privateAccount} ]\n`
	txt += `*under-age-18 :* [ ${anu.isUnderAge18} ]`
	await conn.sendFile(m.chat, anu.avatar, '', txt, m)
}

handler.help = ['ttstalk']
handler.tags = ['entertainment']
handler.command = /^(t(tstalk|iktokstalk))$/i

export default handler