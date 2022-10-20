import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
    let anu = await fetch(`https://restapi.frteam.xyz/husbu?&apikey=${global.lolkey}`)
    let anu2 = await anu.json()
    
    let { nama, url } = anu2

    conn.sendButton(m.chat, `Random Pict Husbu\n\n *Name:* ${nama}`, author, url, [['next', '.frhusbu']], m)
}
handler.help = ['frhusbu']
handler.tags = ['anime']
handler.command = /^(frhusbu)$/i
handler.limit = true

export default handler