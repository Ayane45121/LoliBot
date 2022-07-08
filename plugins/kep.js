let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let kasar = fs.readFileSync('./mp3/WhatsApp-Audio-2021-04-01-at-14.11.16.opus') 
conn.sendFile(m.chat, kasar, '', '', m, true)
}

handler.customPrefix = /^(asu|bangsat|babi|anjing|matamu|bokep|memek)$/i
handler.command = new RegExp

handler.limit = 10
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = true

module.exports = handler
