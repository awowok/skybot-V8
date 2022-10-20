import fetch from 'node-fetch'

let handler = async (m, { conn, command, args, usedPrefix }) => {
    if (!args[0]) return m.reply('Putting *URL* Facebook..')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
    let res = await fetch(`https://malesin.xyz/fb?url=${args[0]}`)
   
    let json = await res.json()
    if (!json.status) throw json 
    await m.reply('Sedang di proses..')
    let cap = `• *Quality :*  ${json.result[0].quality}
`
    await conn.sendFile(m.chat, json.result[0].url, json.result.url, cap, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(fbhd|facebookhd)$/i
handler.premium = false
handler.group = false

export default handler