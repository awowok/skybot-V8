import fs from 'fs'
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
⟩» *Kalau kakak mau jadi bot silahkan jasa run aja kak*
          
━━━〔 ıll *HARGA* llı 〕━━ꕥ
⬡ *1 BULAN* 25.000
  Per Bulan Ygy
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* ${dana}
⬡ *GOPAY:* ${gopay}
⬡ *OVO:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!
⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot

Contact person jasa run:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak😼*`
  //conn.sendButtonDoc(m.chat, anu, sig, flaaa.getRandom() + teks, [['Donasi', '.donasi'], ['SewaBot', '.sewabot']], m)
    conn.send2ButtonDoc(m.chat, anu, author, 'Donasi', '#donasi', 'Sewabot', '.sewabot', null, adReply)
}
handler.help = ['jadibot1']
handler.tags = ['info']
handler.command = /^(jadibot1)$/i

export default handler