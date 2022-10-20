import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {

 let cap = ` Tes Doang `
 global.ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 9999999999999,
                            status: 1,
                            surface : 1,
                            message: 'TioXd Official',
                            orderTitle: 'MENU',
                            thumbnail: await (await fetch('https://telegra.ph/file/3911d7aaaa8733314f70f.png')).buffer(),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
 await conn.reply(m.chat, 'SABAR WOY, LAGI DI PROSES🗿', m)
 await conn.send3ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/cfbeb870983c988666691.png')).buffer(),  '*ᕙ────[ DASBOARD ]────ᕗ*', cap, 'INFO BOT', '.info', 'LIST MENU', '.menu', 'OWNER', '.owner',  m, {
      quoted: ftroli,  
      contextInfo: { //forwardingScore: 99999, isForwarded: true,  
          externalAdReply: {  showAdAttribution: true, 
              title: 'Bot Wahatsapp Alyn Md',
              body: '© Sakka', 
              description: 'Made With ❤️ Sakka', 
              mediaType: 2,  
            thumbnail: await (await fetch('https://telegra.ph/file/72e0aeffe395f99539b95.jpg')).buffer(), 
           mediaUrl: `https://youtu.be/ZH64Xapsj6M` 
          }  
       }  
      })
}
handler.command = /^(saw)$/i

export default handler