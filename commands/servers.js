const discord = require("discord.js")
exports.run = async (client,message) => {
  client.guilds.forEach(g=>{
     message.channel.send(g.name+" | "+g.members.size+" | "+g.id)
  })
}