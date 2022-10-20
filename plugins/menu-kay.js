import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let imgr = flaaa.getRandom()

let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
let template = (args[0] || '').toLowerCase()
if (!args[0]) {
let caption = `
*Contoh Penggunaan Multi*
${usedPrefix + command} img |wibu

*List:*

• img
• vid
• txt
• tpro
`
await conn.sendButtonImg(m.chat, logo, caption, author, 'M E N U', '.menu', fpayment, adReply)
            }
            
if (command) {
switch (template) {

        
            case 'img':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query
            
            *L I S T*
• akira
• ass
• asuna
• blowjob
• cum
• foot
• hentai
• hinata
• husbu
• loli
• meme
• islamic
            `
        let ix = await fetch(`https://api-kaysa.herokuapp.com/api/${one}?apikey=EY34dKQu`)
        let ixn = await ix.json()
        let ixnnn = `*Result:*\n${ixn.image}`
        await conn.sendButtonImg(m.chat, ixn.image, ixnnn, author, 'Video', '.kay img |meme', fpayment, adReply)
        if (one == 'meme') {
        let gnn = `*Result:*\n${ixn.video}`
        await conn.sendButtonImg(m.chat, ixn.video, gnn, author, 'To Sticker', '.s', fpayment, adReply)
        }
            break
            case 'vid':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query
            
            *L I S T*
• asupan
• jjanime
• jjfreefire
• jjml
• jjpubg
• ptl
• hentai
• hinata
• husbu
• loli
            `
        let vx = await fetch(`https://api-kaysa.herokuapp.com/api/${one}?apikey=EY34dKQu`)
        let vxn = await vx.json()
        let vxnnn = `*Result:*\n${vxn.video}`
        await conn.sendButtonImg(m.chat, vxn.video, vxnnn, author, 'To Sticker', '.s', fpayment, adReply)
            break
            case 'txt':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query
            
            *L I S T*
• asmaulhusna
• bijak
• fakta
• motivasi
• quotes
            `
        let tx = await fetch(`https://api-kaysa.herokuapp.com/api/${one}?apikey=EY34dKQu`)
        let txn = await tx.json()
        let txnn = `*Result:*\n${txn.result}`
        await m.reply(txnn)
        if (one == 'asmaulhusna') {
        let ttx = `*Result:*\n${txn.number}\n${txn.latin}\n${txn.arab}\n${txn.translate_id}\n${txn.translate_en}\n`
        await conn.sendButtonImg(m.chat, logo, ttx, author, 'M E N U', '.menu', fpayment, adReply)
        }
        if (one == 'quotes') {
        let tpx = `*Result:*\n${txn.quotes}\n${txn.author}\n`
        await conn.sendButtonImg(m.chat, logo, tpx, author, 'M E N U', '.menu', fpayment, adReply)
        }
            break
            case 'tpro':
            if (!one || !two) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query|query
            
            *L I S T*
• blood
• cloud
• demon
• devil
• firework
• galaxy
• glitch
• glitter
• glow
• graffiti
• greenneon
• lava
• magma
• neon
• newyear2022
• skeleton
• thunder2
• thunder
• toxic
            `
        let vpx = `https://api-kaysa.herokuapp.com/api/textpro/${one}?text=${two}&apikey=EY34dKQu`
        let vpnn = `*Result:*\n`
        await conn.sendButtonImg(m.chat, vpx, vpnn, author, 'To Sticker', '.s', fpayment, adReply)
            break
            
}
}
}
handler.help = ['kay <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^kay$/i
export default handler