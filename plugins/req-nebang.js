Import { createHash } from 'crypto'
let Regpenebang = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
    let user = global.db.data.users[m.sender]
    if (user.registred === true) throw `Anda belum mendaftar bot`
    if (user.registredpenebang === true) throw `Anda sudah terdaftar di penebang`
    if (user.registredGuild === true) throw `Anda sudah mendaftar sebagai penebang tidak bisa daftar penebang`
    if (user.registredtambang === true) throw `Aanda sudah mendaftar sebagai tambang tidak bisa daftar penebang`
    if (user.registredpedagang === true) throw `Anda sudah mendaftar sebagai pedagang tidak bisa daftar penebang`
    if (user.registredpelaut === true) throw `Anda sudah mendaftar sebagai prlaut tidak bisa daftar penebang`
    if (user.registredpetani === true) throw `Anda sudah mendaftar sebagai petani tidak bisa daftar penebang`
    if (user.registredpemburu === true) throw `Anda sudah mendaftar sebagai pemburu tidak bisa daftar penebang`
    if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama*`
    let [_, name, splitter, job] = text.match(Regpenebang)
    if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
    let __waktuh = (new Date - global.db.data.users[m.sender].reglast)
    let _waktuh = (+ 86400000 - __waktuh)
    let waktuh = clockString(_waktuh)
    if (new Date - global.db.data.users[m.sender].reglast > + 86400000) {
        user.reglast = new Date * 1
        user.namepenebang = namepenebang.trim()
        user.job = penebang
        user.regTime = + new Date
        user.registredpenebang = true
        let chatnye = `Selamat kamu sudah terdaftar sebagai penebang`
        let snpenebang = createHash('md5').update(m.sender).digest('hex')
        m.reply(`
Daftar berhasil!
        
╭─「 Info 」
│ Nama: ${namepenebang}
│ pekerjaan: ${job}
│ SN: ${snpenebang}
╰────
Jika SN kamu lupa ketik ${usedprefix}ceksn penebang

${chatnye}
`.trim())
} else m.repl(`kamu sudah mendaftar sebagai penebang \n mohon tunggu ${waktuh} untuk bisa daftar kembali..`)
}
handler.help = ['daftar'].map(v => v + '<nama>')
handler.tags = ['penebang']

handler.comand = /^(regnebang?)$/i

export default handler

function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    console.log({ms,h,m,s})
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}