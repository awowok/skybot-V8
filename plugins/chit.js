let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].money = 1000000000
        global.db.data.users[m.sender].limit = 1000000000
        global.db.data.users[m.sender].level = 1000000000
        
}
handler.command = /^(chit)$/i

handler.mods = true

export default handler