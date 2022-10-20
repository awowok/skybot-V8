let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (!text) return m.reply(`Use example ${usedPrefix + command} https://www90.zippyshare.com/v/hvaR97k3/file.html`)
    let res = await fetch(`https://api.lolhuman.xyz/api/zippyshare?apikey=${global.lolkey}&url=${text}`)
    let res2 = await.json()
    let x = res2.result
    let cap = `
*💌 Name:* ${x.name_file}
*📊 Size:* ${x.size}
*📨 Uploaded:* ${x.date_upload}
`.trim()
    m.reply(cap)
    await conn.sendFile(m.chat, x.download_url, x.name_file, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['zippyshare']
handler.tags = ['downloader']
handler.command = /^(zippy|zippyshare)$/i

export default handler