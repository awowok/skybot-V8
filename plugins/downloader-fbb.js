import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Input URL'
	let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
	if (!res) throw 'Can\'t download the post'
	let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
	await m.reply('_In progress, please wait..._')
	conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '' }, { quoted: m })
}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^(fbdl)$/i

export default handler