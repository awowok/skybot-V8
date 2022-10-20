import fetch from 'node-fetch'
let handler = async (m, { command, text, usedPrefix, conn }) => {
   if (!text) throw `Masukkan Nama!\nContoh: ${usedPrefix + command } Arifzyn19`
    try {
    let moga = await fetch(`https://restapi.frteam.xyz/tiktokstalk?username=${text}&apikey=Hrbot`)
    let bisa = await moga.json()
let cap = `[ TikTok Stalk ]
*username:* ${bisa.result.username}
*nickname:* ${bisa.result.nickname}
*signature:* ${bisa.result.signature}
*verified:* ${bisa.result.verified}
*private:* ${bisa.result.private}
*followers:* ${bisa.result.followers}
*following:* ${bisa.result.following}
*likes:* ${bisa.result.likes}
*video count:* ${bisa.result.video_count}
`
    conn.sendFile(m.chat, bisa.result.profile_url, '', cap, m)
    } catch {
    	throw eror
    	}
}
handler.help = ['frttstalk']
handler.tags = ['Info']
handler.command = /^(frttstalk)$/i
handler.limit = true

export default handler