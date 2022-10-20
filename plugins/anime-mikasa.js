import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
let text = `𝐑𝐚𝐧𝐝𝗼𝗺 𝐏𝐡𝗼𝐭𝗼 𝐌𝐢𝐤𝐚𝐬𝐚`
    let anu = await fetch(`https://betabotz-api.herokuapp.com/api/wallpaper/mikasa?apikey=BetaBotz`)

   let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, text, author, fimgb, [['𝐍𝐄𝐗𝐓', '.mikasa']], null, adReply)
}
handler.help = ['mikasa']
handler.tags = ['anime']
handler.command = /^(mikasa)$/i
handler.limit = true

export default handler