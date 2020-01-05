const discord = require("discord.js")
exports.run = async (client,message) => {
  let d = ""
  let e = new discord.RichEmbed()
  client.guilds.forEach(g=>{
     d += g.name+" | "+g.members.size+"\n"
  })
  e.setDescription(d)
  message.channel.send(e)
}