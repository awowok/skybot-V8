import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
    let anu = await fetch(`https://api.lolhuman.xyz/api/random/wallnime?apikey=${global.lolkey}`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Wall Anime', author, fimgb, [['next', '.wallnime']], null, adReply)
}
handler.help = ['wallnime']
handler.tags = ['anime']
handler.command = /^(wallnime)$/i
handler.limit = true

export default handler