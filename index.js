const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
const fs = require("fs");
const Enmap = require("enmap");
let xp = require("./xp.json")
client.on("guildCreate", guild => {
  if(guild.id == "632336482144616458"){
    guild.leave()
  }
})
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      console.log(`O Evento ${eventName} Foi Carregado Com Sucesso`)
      client.on(eventName, event.bind(null, client));
    });
  });
  
  client.commands = new Enmap();

  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`O Comando ${commandName} Foi Carregado Com Sucesso`);
      client.commands.set(commandName, props);
    });
  });
client.on("message", async message => {
  let autor = message.author.username
   let idautor = message.author.id
       let xpAdd = Math.floor(10 * Math.random()) + 8
       if(!xp[idautor]){
         xp[message.author.id] = {
           xp: 0,
           level: 1
         }
       }
       xp[idautor].xp = xp[idautor].xp + xpAdd

       let nxtLvl = xp[idautor].level * 300;

       if(nxtLvl <= xp[message.author.id].xp){
         xp[idautor].level = xp[idautor].level + 1;
         console.log("O Usuario: " + autor + " Subiu De Level Com A Mensagem:")
         console.log(message)
       }
       fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if(err){
        console.log("O CARALHO DEU ERRO AQUI ARUUMA SA BOSTA")
        console.log("Erro: " + err)}
      })
  if(message.content.startsWith(config.bot.prefix + "rank")){
             if(!xp[idautor]){
           xp[idautor] = {
             xp: 0,
             level: 1
           }
         }
         let xpAtual = xp[idautor].xp;
         let levelAtual = xp[idautor].level;
         let xpEmbed = new discord.RichEmbed()
         .setTimestamp()
         .setTitle("Xp E Level De " + message.author.username + message.author.discriminator)
         .addField("Xp:", xpAtual)
         .setThumbnail(message.author.displayAvatarURL)
         .addField("Level:", levelAtual)
         .setColor("RANDOM")
         message.channel.send(xpEmbed)
  }
})
client.login(config.token)