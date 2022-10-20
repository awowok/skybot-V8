let handler= async (m, { conn }) => { 
let res = (`https://api.lolhuman.xyz/api/random/loli?apikey=${global.lolkey}`)
conn.sendFile(m.chat, res, 'loli.jpg', 'Random Loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

export default handler