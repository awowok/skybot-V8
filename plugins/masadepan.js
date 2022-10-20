let handler = async (m, { conn, command, text }) => {
if (!text) return conn.reply(m.chat, 'Masukan Namamu Udin!', m)
  let imgr = flaaa.getRandom()
  await conn.reply(m.chat, `Bentar...`, m)
  let caption = `*BISMILAH DULU BANG*`

await conn.sendButton(m.chat, caption, wm, imgr + command, [
                ['Aamiin', '/masadepannya' + text]
            ], m, { quoted: fgif })
}

handler.command = handler.help = ['masadepan']
handler.tags = ['fun']

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}