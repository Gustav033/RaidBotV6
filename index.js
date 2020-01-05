const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
const fs = require("fs");
const Enmap = require("enmap");
let prefix = config.prefix
client.config = config;
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
client.login(config.token)