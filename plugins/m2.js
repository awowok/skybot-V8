import os from 'os'
import { sizeFormatter } from 'human-readable'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let name = conn.getName(m.sender)
let role = global.db.data.users[m.sender].role
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let week = d.toLocaleDateString(locale, { weekday: 'long' })    
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric', month: 'long', year: 'numeric'
}).format(d)
let nopp = { url: 'https://telegra.ph/file/c78b3ddffb453792a32e7.jpg' }
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => nopp)
let bio = await conn.fetchStatus(m.sender).catch(_ => 'Private!')
let formatSize = sizeFormatter({
	std: 'JEDEC',
	decimalPlaces: '2',
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`
})
let chats = Object.keys(await conn.chats)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let session = fs.statSync(authFile)
let premium = global.db.data.users[m.sender].premium
let dens = `${ucapan()}, ${name}

╭─❑ 「 Date Info 」 
├Tanggal : ${week} ${date}
├ Islamic : ${dateIslamic}
╰─❑

╭─❑ 「 Bot Info 」
├ Library: Baileys-Md
├ Language :Javascript
├ Uptime : ${uptime}
├ Creator : DeltaUhuy
├ Platform : ${process.platform}
├ Nodejs : ${process.version}
├ Type : Multi-Device
├ Storage : MongoDB
├ Total Chat : ${chats.length}
├ Pengguna : ${Object.keys(global.db.data.users).length}
├ User Banned : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
├ Mode : ${global.opts['self'] ? 'Self' : 'publik'}
├ Memory Usage : ${formatSize(os.totalmem() - os.freemem())} / ${formatSize(os.totalmem())}
╰─❑

╭─❑ 「 User Info 」 
├ Name : ${name}
├ Bio : ${bio.status}
├ Role Rpg : ${role}
├ Status : ${premium ? "Premium": "Free"} User
├ Api : https://wa.me/${m.sender.split('@')[0]}
├ Device Bot : IOS
╰─❑

Aku Masih Beta Dari *Multi-Device* Jadi Harap Maklumin Kalau Ada Error Ya😇`
let btn = [{
urlButton: {
displayText: 'GROUP SUPPORT',
url: gcwangsaf
}
}, {
callButton: {
displayText: 'OWNER',
phoneNumber: '+62 823-2567-3016'
}
}, {
quickReplyButton: {
displayText: '𝐃𝐨𝐧𝐚𝐬𝐢',
id: '.donasi'
}
}, {
quickReplyButton: {
displayText: '𝐑𝐮𝐥𝐞𝐬',
id: '.? all'
}  
}, {
quickReplyButton: {
displayText: '𝐋𝐢𝐬𝐭 𝐂𝐨𝐦𝐦𝐚𝐧𝐝',
id: '.?'
}
}]
conn.sendPresenceUpdate('composing', m.chat)
conn.sendButtonLoc(m.chat, dens, wm, pp, btn)
}
handler.command = /^(m2)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}