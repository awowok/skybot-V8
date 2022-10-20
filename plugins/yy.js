let handler = m => m
handler.all = function (m) {
if (/^komtol$/i.test(m.text)) m.reply('Online')
}

export default handler