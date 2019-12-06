module.exports = async client => {
        client.guilds.forEach(guild => {
          if(guild.id == 641735864229036044){
            guild.leave()
          }
        })
        console.log("                 Raid-Bot V4 Online");
        console.log("        Feito Por: Gustavo33");
       client.user.setGame(`Eu Estou Em ${client.guilds.size} Servidores! Com ${client.users.size} Membros!`)
}