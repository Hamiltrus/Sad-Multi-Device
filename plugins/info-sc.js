import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `apa cari sc chat owner gwej ,Terimakasih`
conn.sendButtonDoc(m.chat, str, wm, 'meminta','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
