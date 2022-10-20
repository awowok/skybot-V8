let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let user = global.db.data.users[m.sender]
        let kayu = user.kayu * 1
        let batu = user.batu * 1
        let string = user.string * 1
        let money = user.money * 1
        let iron = user.iron * 1
        let type = (args[0] || '').toLowerCase()
        
        let lmao1 = `Gunakan Format *${usedPrefix}${command} [type]*
contoh *${usedPrefix}${command} fishingRod*

${htjava} *📌List yang Bisa Di Craft* ${htjava}

${cmenub} 🎣 FishingRod
${cmenub} 🏹 Bow 
${cmenub} ⛏  ️Pickaxe
${cmenub} ⚔️ Sword
${cmenuf}
`.trim()
if (!type) return conn.sendButton(m.chat, lmao1, author, [['Inventory', '.inv 1']], m)
try {
if (type == 'fishingrod') {
	if ((user.fishingrod * 1) > 0) {
                    const buttons = [
                        {buttonId: `${prefix}upgrade fishingrod`, buttonText: {displayText: 'Upgrade 🎣FishingRod'}, type: 1},
                    ]
                    let lmao = `anda sudah memiliki 🎣Fishing Rod
untuk mengupgrade ketik *${usedPrefix}upgrade fishingrod*`.trim()
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                
                if (kayu < 30 || string < 20 || money < 10000) return m.reply(`Material kamu kurang!!${kayu < 30 ? `\n🪵Kayu Kamu Kurang *${30 - kayu}*` : ''}${string < 20 ? `\n🕸️String Kamu Kurang *${20 - string}*` : ''}${user.money < 10000 ? `\n💵Uang Kamu Kurang *${10000 - money}*` : ''}`)
                user.fishingrod += 1
                user.kayu -= 30
                user.batu -= 20
                user.money -= 10000
                user.fishingroddurability += 50
                m.reply('Succes mengcrafting 🎣FishingRod')
	}
	if (type == 'bow') {
		if ((user.bow * 1) > 0) {
                    const buttons = [
                        {buttonId: `{prefix}upgrade bow`, buttonText: {displayText: 'Upgrade 🏹Bow'}, type: 1},
                    ]
                    let lmao = `anda sudah memiliki 🏹Bow
untuk mengupgrade ketik *${usedPrefix}upgrade bow*`
                    const buttonMessage = {
                        text: lmao,
                        footer: author,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m})
                }
                if (kayu < 30 || string < 10) return m.reply(`
Material Anda Kurang!!
${kayu < 30 ? `\n🕸️string kamu kurang *${30 - iron}*` : ''}${string < 10 ? `\n🪵Kayu kamu kurang *${10 - kayu}*` : ''}`)
                user.bow += 1
                user.kayu -= 30
                user.string -= 10
                user.bowdurability += 50
                m.reply('Sukses MengCrafting ️🏹Bow')      
	}
	if (type == 'pickaxe') {
		if ((user.pickaxe * 1) > 0) {
                    const buttons = [
                        {buttonId: `${prefix}upgrade pickaxe`, buttonText: {displayText: 'Upgrade ⛏️Pickaxe'}, type: 1},
                    ]
                    let lmao = `anda sudah memiliki ⛏️Pickaxe
untuk mengupgrade ketik *${usedPrefix}upgrade Pickaxe*`
                    const buttonMessage = {
                        text: lmao,
                        footer: author,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (batu < 30 || kayu < 20 || money < 1500) return m.reply(`
Material Anda Kurang!!
${batu < 30 ? `\n🪨Batu kamu kurang *${30 - batu}*` : ''}${kayu < 20 ? `\n🪵Kayu kamu kurang *${20 - kayu}*` : ''}${money < 15000 ? `\n💵Uang kamu kurang *${15000 - money}*` : ''}`)
                user.pickaxe += 1
                user.kayu -= 20
                user.batu -= 30
                user.money -= 15000
                user.pickaxedurability += 50
                m.reply('Succes mengcrafting ⛏️Pickaxe')
	}
	if (type == 'sword') {
		if ((user.sword * 1) > 0) {
                    const buttons = [
                        {buttonId: `${prefix}upgrade sword`, buttonText: {displayText: 'Upgrade ⚔️Sword'}, type: 1},
                    ]
                    let lmao =`Anda sudah memiliki ⚔️Sword, untuk mengupgrade ketik
*${usedPrefix}upgrade sword*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (iron < 30 || kayu < 20 || money < 10000) return m.reply(`
Material Anda Kurang!!
${iron < 30 ? `\n⛓️Iron kamu kurang *${30 - iron}*` : ''}${kayu < 20 ? `\n🪵Kayu kamu kurang *${20 - kayu}*` : ''}${money < 10000 ? `\n💵Uang kamu kurang *${10000 - money}*` : ''}`)
                user.sword += 1
                user.iron -= 30
                user.kayu -= 20
                user.money -= 10000
                user.sworddurability += 50
                m.reply('Succes mengcrafting ⚔️Sword')
	}
	} catch (e) {
		throw lmao1
		}
	}
handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft(ing)?)$/i

handler.fail = null

export default handler