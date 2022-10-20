import fetch from 'node-fetch'
import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, command }) => {

  if (!text) return m.reply(`Example : ${usedPrefix + command} spongebob`)
  let js6 = await pinterest(text)
  let cap = `*Pinterest* : ${text}`
 conn.sendButton(m.chat, cap, '_© Wallpaper Finder and Pinterest _', js6.getRandom(), [
                  [`Next ${command}`, `${usedPrefix + command + text}`]], m)
}
handler.help = ['pinterest <query>']
handler.command = /^(pin|pinterest)$/i
handler.tags = ['random']

export default handler