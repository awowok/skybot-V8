let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     𝐕𝐞𝐫𝐬𝐢𝗼𝐧 4.10
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' *Version BoT* ', 'status@broadcast')
}
handler.help = ['cekversi']
handler.tags = ['info']
handler.command = /^(cekversi)$/i

export default handler