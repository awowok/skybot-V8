import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = hwaifu.getRandom()
global.rep = {
			contextInfo: {
				forwardingScore: fsizedoc,
				//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                    showAdAttribution: true,
					title: '𝐃𝗼𝐧𝐚𝐬𝐢',
					body: '𝐖𝐚𝐧𝐭 𝐒𝐮𝐩𝐩𝗼𝐫𝐭 𝐁𝗼𝐭?',
					mediaUrl: sgc,
					description: botdate,
					previewType: "PHOTO",
					thumbnail: await (await fetch(pp)).buffer(),
					sourceUrl: sgh			
				}
			}
		}
conn.sendButtonDoc(m.chat, `𝐃𝐎𝐍𝐀𝐒𝐈`, `⮕ 𝐆𝗼𝐩𝐚𝐲 = [089636219593]\n⮕ 𝐃𝐚𝐧𝐚 = [0895347198105]\n⮕ 𝐒𝐚𝐰𝐞𝐫𝐢𝐚 = [https://saweria.co/Arifzyn]\n\n𝐍𝗼𝐭𝐞 : 𝐉𝐢𝐤𝐚 𝐒𝐮𝐝𝐚𝐡 𝐃𝗼𝐧𝐚𝐬𝐢 𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐊𝐢𝐫𝗺\n𝐁𝐮𝐤𝐭𝐢 𝐊𝐞 𝐎𝐰𝐧𝐞𝐫!!\n𝐀𝐭𝐚𝐮 𝐊𝐥𝐢𝐤 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡
`, '𝐎𝐖𝐍𝐄𝐑', '.owner', m, rep)
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}