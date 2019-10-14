const discord = require("discord.js")

exports.run = async (client, message) => {
  let pingm = await message.channel.send("Calculando!")
  let Ping = "Seu Ping:" + pingm.createdTimestamp - message.createdTimestamp + "ms | Ping Do Bot:" + Math.round(client.ping) + 'ms';
  let embed = new discord.RichEmbed()
  .setTitle("Test!")
  .setDescription("Ping: " + Ping)
  .addField("Bot Funcionando?", "Sim!")
  .addField("Versão:", "V4")
  .setColor("RANDOM")
  .setFooter("Feito Por Gustavo33")
  pingm.edit(embed)
}