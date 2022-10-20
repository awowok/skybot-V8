import fetch from 'node-fetch'

let handler = async (m, { usedPrefix, command, conn }) => {
    let anu = await fetch(`https://docs-jojo.herokuapp.com/api/cersex`)
    let anu2 = await anu.json()
    let q = anu2.result
let txt = `${htjava} Cerita Sex ${htjava}
◎ _*Judul :*_ ${q.judul}

◎ *Cerita Sex :*
    ➥ ${q.cersex}
`
    conn.sendButton(m.chat, txt, ' *Cersex | By JojoApi* ', q.img, [['next', `${usedPrefix + command}`]], m)
}
handler.help = ['sex']
handler.tags = ['fun']
handler.command = /^(cersex)$/i
handler.limit = true

export default handler