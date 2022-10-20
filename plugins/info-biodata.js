let handler = async (m, { conn }) => {
let caption = `––––––『 *BIODATA* 』––––––
⫹⫺ *💌 Nama* : 𝑨𝒓𝒊𝒇𝒛𝒚𝒏
⫹⫺ *✉️ Nama RL* : 𝑨𝒓𝒊𝒇
⫹⫺ *♂️ Gender* : Boys
⫹⫺ *🕉 Agama* : 𝑰𝒔𝒍𝒂𝒎
⫹⫺ *⏰ Tanggal lahir* : Private 
⫹⫺ *🎨 Umur* : 17
⫹⫺ *🧮 Kelas* : 11
⫹⫺ *🧩 Hobby* : 𝑵𝒐𝒏𝒕𝒐𝒏 𝑩𝒐𝒌𝒆𝒑
⫹⫺ *💬 Sifat* : 𝐒𝗼𝐊𝐮𝐥𝐥🥶
⫹⫺ *🗺️ Tinggal* : 𝑰𝒏𝒅𝒐, 𝑱𝒂𝒘𝒂 𝑩𝒂𝒓𝒂𝒕, 𝑩𝒐𝒈𝒐𝒓

⫹⫺ *📷 ɪɴsᴛᴀɢʀᴀᴍ* : https://instagram.com/arifzyn19_
⫹⫺ *🐈 ɢɪᴛʜᴜʙ:* https://github.com/RifXz19
•·––––––––––––––––––––––––––·•
`
conn.sendButtonDoc(m.chat, caption, author, 'Menu', `#menu`, fgif, adReply)
}
handler.help = ['biodata']
handler.tags = ['info']
handler.command = /^(biodata|arif|bioowner)$/i

export default handler