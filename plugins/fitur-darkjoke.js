import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
    let anu = await fetch(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${global.lolkey}`)
    let fimgb = Buffer.from(await anu.arrayBuffer())
    
    let caption = `*⎔┉━「 Random darkjoke 」━┉⎔*
🤠 *Query* : ${command}`

    conn.sendButton(m.chat, caption, author, fimgb, [['next', '.artnime']], m)
}
handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke)$/i
handler.limit = true

export default handler