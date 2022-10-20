let handler = async (m, { command, conn }) => {
	const sukses = './src/avatar_contact.png'
 conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/wallnime?apikey=Arifzyn19', 'asupan.mp4', `𝐑𝐚𝐧𝐝𝗼𝗺 ${command}`, m)
}
handler.help = ['wallanime']
handler.tags = ['anime']

handler.command = /^(wallanime)$/i
handler.group = false
handler.private = true
handler.premium = true
handler.register = true
handler.limit = 25
export default handler