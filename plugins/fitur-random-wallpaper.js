import fetch from 'node-fetch'

let handler = async(m, { conn, command }) => {

if (command == 'cyberspace') {
let anu = await fetch(`https://betabotz-api.herokuapp.com/api/wallpaper/cyberspace?apikey=BetaBotz`)
let fimgb = Buffer.from(await anu.arrayBuffer())
await conn.sendButton(m.chat, `Result Nihh *${command}*`.trim(), author, fimgb, [['🔄 Next 🔄', `/${command}`]], m)}
if (command == 'mountain') {
let anu = await await fetch(`https://betabotz-api.herokuapp.com/api/wallpaper/mountain?apikey=BetaBotz`)
let fimgb = Buffer.from(await anu.arrayBuffer())
await conn.sendButton(m.chat, `Result Nihh *${command}*`.trim(), author, fimgb, [['🔄 Next 🔄', `/${command}`]], m)}
if (command == 'programing') {
let anu = await await fetch(`https://betabotz-api.herokuapp.com/api/wallpaper/programing?apikey=BetaBotz`)
let fimgb = Buffer.from(await anu.arrayBuffer())
await conn.sendButton(m.chat, `Result Nihh *${command}*`.trim(), author, fimgb, [['🔄 Next 🔄', `/${command}`]], m)}
}
handler.command = handler.help = ['cyberspace', 'mountain', 'programing']
handler.tags = ['wallpaper']
export default handler