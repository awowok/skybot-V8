import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
 
    let anu = await fetch('https://betabotz-api.herokuapp.com/api/random/faktaunik?apikey=BetaBotz')
   let anu2 = await anu.json()
   let { result } = anu2
   let cap = `
◎ *Fakta unik:* 
      ➥ *${result}*
`
conn.sendButtonDoc(m.chat, cap, '𝐅𝐚𝐤𝐭𝐚 𝐔𝐧𝐢𝐤 | 𝐁𝐲 𝐁𝐞𝐭𝐚𝐁𝗼𝐭𝐳', '𝐍𝐄𝐗𝐓', `${usedPrefix + command}`, m, adReply)
}
handler.command = /^(faktaunik)$/i

export default handler