import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
    let anu = await fetch(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=Arifzyn19`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.send2ButtonLoc(m.chat, fimgb, 'random', author, 'next', '.meks' m)

}

handler.help = ['meks']
handler.tags = ['randompic']
handler.command = /^(meks)$/i

export default handler