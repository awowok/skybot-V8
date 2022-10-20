import fetch from 'node-fetch'

let handler = async (m, { usedPrefix, command, conn }) => {
    let anu = await fetch(`https://zenzapis.xyz/randomtext/cersex?apikey=2a840e963e`)
    let anu2 = await anu.json()
    let q = anu2.result
let txt = `${htjava} Cerita Sex ${htjava}
◎ _*Judul :*_ ${q.Judul}

◎ *Cerita Sex :*
    ➥ ${q.Cerita}
`
    conn.sendButton(m.chat, txt, ' *Cersex | By ZenzApi* ', q.Thumb, [['next', `${usedPrefix + command}`]], m)
}
handler.help = ['sex']
handler.tags = ['fun']
handler.command = /^(sex)$/i
handler.limit = true

export default handler