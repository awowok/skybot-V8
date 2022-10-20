import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {

   if (!text) return m.reply(`*Example :* ${usedPrefix + command} sHalo`)
   let res = await fetch(`https://anabotofc.herokuapp.com/api/music/chordlagu?lagu=${text}&apikey=AnaBot`)
   let res2 = await res.json()
   let cap = `*Chord Lagu :* ${text}

◎ *Chord =* 
    ➥ ${res2.result}
`
await conn.relpy(m.chat, cap, m)
}
hander.command = /^(chord)$/i

export default handler