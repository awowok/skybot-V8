import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
  let name = await conn.getName(m.sender)
  let user = global.db.data.users[m.sender]
let pp = 'https://telegra.ph/file/c7cd3c7bd4e1a30167f14.jpg'
  const caption = `
╭───❑ 「 BALANCE 」 ❑────
├─ 📛 *Name:* ${name}
├─ 🏛️ *Bank:* ${user.atm}
├─ 🎫 *Limit*: ${user.limit}
├─ 💹 *Money*: ${user.money}
├─ 📍 *Role*: ${user.role}
├─ 📊 *Level*: ${user.level}
╰─❑ ✨ *Exp*: ${user.exp}
`.trim()
  conn.sendButtonLoc(m.chat, pp, caption, `Silahkan Ketik ${usedPrefix}nabung Jumlah\nUntuk Nabung Ke Bank!!`, 'Inventory', '.inv', m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler