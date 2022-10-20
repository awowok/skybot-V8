import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/565230b6a1818102ce198.jpg'
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let cap = `Ini Cuma Tes Doang Kok Kontol
`
conn.send2ButtonLoc(m.chat, hwaifu.getRandom(), cap, author, 'Menu', '.menu', 'Owner', '.owner', m)
}
handler.help = ['loc']
handler.tags = ['tes']
handler.command = /^loc$/i

export default handler