import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
    let anu = await fetch(`https://betabotz-api.herokuapp.com/api/wallpaper/gaming?apikey=BetaBotz`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, 'Wallpaper Games', author, fimgb, [['next', '.wallgames']], m)
}
handler.help = ['wallgames']
handler.tags = ['internet']
handler.command = /^(wallgames|wallpapergames)$/i
handler.limit = true

export default handler