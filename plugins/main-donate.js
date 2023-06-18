
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 69 MILLION FOLLOWERS ON MY INSTAGRAM https://instagram.com/_not.luffy?igshid=MzNlNGNkZWQ4Mg==`
let img = 'https://i.imgur.com/DEgswSB.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
