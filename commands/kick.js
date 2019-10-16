exports.run = async (client, message, args) => {
  let memb5er = message.mentions.first()
  if(!memb5er) return message.reply("Utilize !kick <usuario>")
  memb5er.kick("Kickado Por " + message.author.username)
  message.reply("Usuario Kickado")
}