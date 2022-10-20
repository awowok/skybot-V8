let handler = async (m, { conn, args }) => {
	let money = global.db.data.users[m.sender].money
    let __waktutionskh = (new Date - global.db.data.users[m.sender].spinlast)
    let _waktutionskh = (30000 - __waktutionskh)
    let waktutionskh = clockString(_waktutionskh)
    if (new Date - global.db.data.users[m.sender].spinlast > 30000) {
	if (args[0] == "all"){
		args[0] = global.db.data.users[m.sender].money
	}
	if(!args || !args[0] || args[0] == 0) {
		conn.reply(m.chat, `*Masukkan nominal / jumlah uang untuk di spin.*`, m)
	} else if(isNaN(args[0]) && args[0] !== "all") {
		conn.reply(m.chat, `*Uang harus berupa angka & tanpa [ . ]*`, m)
	} else if(args[0] > money) {
		conn.reply(m.chat, `*Uang anda tidak cukup untuk melakukan spin sebanyak Rp. ${Number(args[0]).toLocaleString().replace(/,/g, '.')},-*`, m)
	} else if(money == 0) {
		conn.reply(m.chat, `*Kamu tidak punya uang untuk bermain permainan spin.*`, m)
	} else if(args[0] < 10000) {
		conn.reply(m.chat, `*Tidak bisa melakukan spin dengan nominal di bawah Rp. 10.000,-*`, m)
	}else {
		global.db.data.users[m.sender].money -= args[0]
		setTimeout(() => {
			var maxReward = 5
			if (money > 100000000){		// > 100jt
				if (args[0] > 100000000){
					var reward = getRandom(1,0.25*args[0])
				}else if (args[0] > 10000000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 1000000){
					var reward = getRandom(1,0.75*args[0])
				}else if (args[0] > 100000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 10000){
					var reward = getRandom(1,1.25*args[0])
				}else {
					var reward = getRandom(1,1.5*args[0])
				}
			}else if (money > 10000000){	// > 10jt
				if (args[0] > 10000000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 1000000){
					var reward = getRandom(1,0.75*args[0])
				}else if (args[0] > 100000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 10000){
					var reward = getRandom(1,1.5*args[0])
				}else {
					var reward = getRandom(1,2*args[0])
				}
			}else if (money > 5000000){	// > 5jt
				if (args[0] > 5000000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 2000000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 1000000){
					var reward = getRandom(1,1.25*args[0])
				}else if (args[0] > 100000){
					var reward = getRandom(1,2*args[0])
				}else {
					var reward = getRandom(1,3*args[0])
				}
			}else if (money > 1000000){	// > 1jt
				if (args[0] > 1000000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 500000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 250000) {
					var reward = getRandom(1,2*args[0])
				}else if (args[0] > 100000) {
					var reward = getRandom(1,3*args[0])
				}else {
					var reward = getRandom(1,4*args[0])
				}
			}else{		// < 500rb
				if (args[0] > 500000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 100000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 50000) {
					var reward = getRandom(1,2*args[0])
				}else if (args[0] > 25000) {
					var reward = getRandom(1,3*args[0])
				}else if (args[0] > 10000) {
					var reward = getRandom(1,4*args[0])
				}else {
					var reward = getRandom(1,maxReward*args[0])
				}
			}
			
			global.db.data.users[m.sender].limit -= 2
			global.db.data.users[m.sender].money += reward 
            global.db.data.users[m.sender].spinlast = new Date * 1
			let last = global.db.data.users[m.sender].money
			let total = last

			return conn.reply(m.chat, `*❏ SPIN RESULT*\n\n	- *Rp. ${Number(args[0]).toLocaleString().replace(/,/g, '.')}*\n	+ *Rp. ${Number(reward).toLocaleString().replace(/,/g, '.')}*\n\n*Total : Rp. ${Number(total).toLocaleString().replace(/,/g, '.')},-*\n\n*NB* : “Rentang hadiah adalah Rp. 1 sampai ${maxReward}x lipat modal , dan akan terkena -2 limit ”`, m)  
    }, 1000)
	} 
	} else m.reply(`Kamu sudah spin, tidak bisa spin kembali..\nMohon tunggu ${waktutionskh} lagi untuk spin kembali `)
}
handler.help = ['spin <jumlah>']
handler.tags = ['game']
handler.command = /^(spin)$/i
handler.owner = false
handler.group = true
handler.limit = true

handler.exp = 0
export default handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}