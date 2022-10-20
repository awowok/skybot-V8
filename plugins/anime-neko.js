import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
    let anu = await fetch(`https://api-xcoders.xyz/api/anime/neko?apikey=FCLBKnOM4U`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, `Result Random ${command}`, author, fimgb, [['NEXT', '.neko']], m, adReply)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i
handler.limit = true

export default handler