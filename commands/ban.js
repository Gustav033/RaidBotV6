exports.run = async (client, message, args) => {
  let memb5er = message.mentions.first()
  if(!memb5er) return message.reply("Utilize !ban <usuario>")
  memb5er.ban("Banido Por " + message.author.username)
  message.reply("Usuario Banido")
}