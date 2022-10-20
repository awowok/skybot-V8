import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
    let anu = await fetch(`https://restapi.frteam.xyz/loli?&apikey=${global.lolkey}`)

   let anu2 = await anu.json()

    conn.sendButton(m.chat, 'Random Pict Loli', author, anu2.url, [['next', '.randomloli']], m)
}
handler.help = ['randomloli']
handler.tags = ['anime']
handler.command = /^(randomloli)$/i
handler.limit = true

export default handler