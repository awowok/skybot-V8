import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn }) => {
  let res = await fetch('https://betabotz-api.herokuapp.com/api/sticker/gojosatoru?apikey=BetaBotz')
  let json = await res.json()
  let stiker = await sticker(null, json.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['gojo']
handler.tags = ['sticker']
handler.command = /^gojo$/i
handler.limit = true

export default handler