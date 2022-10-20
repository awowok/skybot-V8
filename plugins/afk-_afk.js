export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        let caption = `
  𝐊𝐚𝗺𝐮 𝐁𝐞𝐫𝐡𝐞𝐧𝐭𝐢 𝐀𝐅𝐊 ${user.afkReason ? ' 𝐒𝐞𝐭𝐞𝐥𝐚𝐡: ' + user.afkReason : ''}
  Selama ${(new Date - user.afk).toTimeString()}
  `.trim()
  let kataafk = ['mau turu', 'mau nyolong', 'Ke rumah ayang', 'jagain lilin', 'beli pop es', 'kawin lari', 'main kelereng', 'petak umpet', 'push renk', 'push up joni', 'olahraga', 'onani', 'beraq', 'open bo', 'di suruh emak', 'kerja']
conn.sendButtonDoc(m.chat, caption, author, 'Afk Lagi', '.afk ' + kataafk.getRandom, m, adReply)
   user.afk = -1
   user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        let caption = `
  𝐉𝐚𝐧𝐠𝐚𝐧 𝐓𝐚𝐠 𝐃𝐢𝐚!!
  𝐃𝐢𝐚 𝐒𝐞𝐝𝐚𝐧𝐠 𝐀𝐅𝐊 *${reason ? '𝐃𝐞𝐧𝐠𝐚𝐧 𝐀𝐥𝐚𝐬𝐚𝐧 ' + reason : 'tanpa alasan'}*
  Selama ${(new Date - afkTime).toTimeString()}
  `.trim()
conn.sendButtonDoc(m.chat, caption, author, 'Berhenti', '/tts id kok berhenti' + kataafk.getRandom, m, adReply)
    return true
}