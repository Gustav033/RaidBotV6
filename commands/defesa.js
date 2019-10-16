const discord = require("discord.js")
exports.run = async (client, message) => {
 let embed = new discord.RichEmbed()
 .setTitle("Anti Raid")
 .setDescription("Proteção Contra Raid Ativada!")
 message.channel.send(embed)
}