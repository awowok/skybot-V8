import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let tqto = `
${cmenut}
${cmenub} *🔖 FITUR :* ${totalf.length}
${cmenuf}

_Jangan di spam ntar erorr_
(. ❛ ᴗ ❛.)
${cmenua}`
conn.send2ButtonLoc(m.chat, pp, '––––––『 𝐓𝗼𝐭𝐚𝐥 𝐅𝐢𝐭𝐮𝐫 』––––––', tqto, 'Menu', '.menu', 'Owner', '.owner', m)
}
handler.help = ['totalfitur']
handler.tags = ['main','info']
handler.command = /^total(fitur|ft)$/i
export default handler