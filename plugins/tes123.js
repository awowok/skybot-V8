import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ``𝐒𝐤𝐲𝐁𝗼𝐭-𝐌𝐃
  ${botdate}
  
  ◉ 𝐍𝐚𝗺𝐚 : ${name}
  ◉ 𝐒𝐭𝐚𝐭𝐮𝐬 : ${user.premiumTime > 0 ? 'Premium' : 'Free'}
  ◉ L𝐢𝗺𝐢𝐭 : ${limit}
  ◉ S𝐚𝐥𝐝𝗼 : R𝐩 ${𝗺𝗼𝐧𝐞𝐲}
  ◉ 𝐄𝐱𝐩 : ${exp}
  ◉ 𝐑𝗼𝐥𝐞 : ${role}
  ◉ 𝐀𝐠𝐞 : ${age}
  ◉ R𝐮𝐧𝐧𝐢𝐧𝐠 O𝐧 : P𝐚𝐧𝐞𝐥
  ◉ M𝗼𝐝𝐞 : Public
`
await conn.send2ButtonDoc(m.chat, info, author, '🔖 Matikan Fitur', '.off detect', 'ℹ️ Menu', '.menu', fpayment, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: author,
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: logo, 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: author,
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: logo,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    thumbnailUrl: logo,
    title: '© 𝐒𝐤𝐲𝐁𝗼𝐭'
				}
			}
	
}
handler.customPrefix = /^(tos|toss|tost)$/i
handler.command = new RegExp

export default handler