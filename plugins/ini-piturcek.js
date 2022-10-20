import fetch from 'node-fetch'
import fs from "fs"

let handler = async (m, { conn, args, text, usedPrefix, command }) => {

let fko = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg'), thumbnail: fs.readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
let template = (args[0] || '').toLowerCase()
if (!args[0]) {
let caption = `*Contoh Penggunaan*

${usedPrefix + command} tai @user

*List Command*
• anjing
• asu
• babi
• bajingan
• banci
• bangsat
• bego
• bejad
• bencong
• bolot
• brengsek
• budek
• buta
• geblek
• gembel
• gila
• goblok
• iblis
• idiot
• jablay
• jelek
• kampret
• kampungan
• kamseupay
• keparat
• kontol
• kunyuk
• maho
• memek
• monyet
• ngentot
• pecun
• perek
• sarap
• setan
• sinting
• sompret
• tai
• tolol
• udik
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m)
            }
            
if (command) {
switch (template) {

case 'anjing':
case 'asu':
case 'babi':
case 'bajingan':
case 'banci':
case 'bangsat':
case 'bego':
case 'bejad':
case 'bencong':
case 'bolot':
case 'brengsek':
case 'budek':
case 'buta':
case 'geblek':
case 'gembel':
case 'gila':
case 'goblok':
case 'iblis':
case 'idiot':
case 'jablay':
case 'jelek':
case 'kampret':
case 'kampungan':
case 'kamseupay':
case 'keparat':
case 'kontol':
case 'kunyuk':
case 'maho':
case 'memek':
case 'monyet':
case 'ngentot':
case 'pecun':
case 'perek':
case 'sarap':
case 'setan':
case 'sinting':
case 'sompret':
case 'tai':
case 'tolol':
case 'udik':

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    let angka = 100
    let angka2 = 9
let caption = `Tingkat ke *${args[0]}an* \nAtas nama ${name} @${who.split("@")[0]} \nAdalah Sebesar *${angka.getRandom()}.${angka2.getRandom()}%*`
  await conn.reply(m.chat, caption, fkon)
break
            }
       }
}
handler.help = ['cek <menu> <user>']
handler.tags = ['tools'] 
handler.command = /^cek$/i
export default handler