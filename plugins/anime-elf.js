let handler = async (m, { conn }) => {
conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elf?apikey=Arifzyn19', 'elf.jpg', 'Random elf', fkon)
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^elf$/i

export default handler