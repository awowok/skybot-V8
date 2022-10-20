import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
    let anu = await fetch(`https://api.lolhuman.xyz/api/random/art?apikey=${global.lolkey}`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Random Fanart', author, fimgb, [['next', '.artnime']], m)
}
handler.help = ['artnime']
handler.tags = ['anime']
handler.command = /^art(anime|nime)$/i
handler.limit = true

export default handler