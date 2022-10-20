import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
     let anu = await fetch(`https://restapi.frteam.xyz/randomwalp?&apikey=${global.lolkey}`)
     
     let anu2 = await anu.json()
     
     conn.sendButton(m.chat, `Random Wallpaper`, author, anu2.url, [['Next', '.frwall']], m)
}
handler.help = ['frwall']
handler.tags = ['random']
handler.command = /^(frwall)$/i
handler.limit = true

export default handler