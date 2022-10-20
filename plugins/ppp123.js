let handler  = async (m, { conn, usedPrefix: _p }) => {
let cap = `
𝐀𝐩𝐚??
𝐁𝗼𝐭 𝐃𝐢 𝐒𝐢𝐧𝐢, 𝐔𝐧𝐭𝐮𝐤 𝐋𝐢𝐡𝐚𝐭 𝐌𝐞𝐧𝐮 𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐊𝐥𝐢𝐤 𝐃𝐢 𝐁𝐰𝐚𝐡!! 
𝐀𝐭𝐚𝐮 𝐊𝐞𝐭𝐢𝐤 .menu

${global.author}
`
conn.sendButtonDoc(m.chat, `BOT`, cap, '𝐌𝐄𝐍𝐔', '.menu', fkon, adReply)
}
handler.customPrefix = /^(pp|p|pee|pe|bot|bot?|bott)$/i
handler.command = new RegExp

export default handler