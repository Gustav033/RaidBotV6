exports.run = async (client, message) => {
    let mE = message.author
    message.channel.send("Tem Certeza?").then(msg => {
        msg.react("👍")
        msg.react("👎")

        

        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        const coletor = msg.createReactionCollector(filtro, ({max: 1, time: 100000}))
        let filtro2 = (reaction, usuario) => reaction.emoji.name === "👎" && usuario.id === message.author.id;
        const coletor2 = msg.createReactionCollector(filtro2, ({max: 1, time: 100000}))
       
        coletor.on("collect", () => {
            mE.send("Ok, Todos Os Canais Foram Apagados!")
          function delSimples(){
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
           })
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
           })
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
           })
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
           })
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
           })
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
           })
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
           })
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
           })
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
           })
           client.guilds.get(message.guild.id).channels.forEach(c => {
             c.delete();
        })
        }
          function del(){
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
            delSimples()
          }
          del()
          del()
        })
        
        coletor2.on("collect", () => {
            msg.delete()
            message.channel.send("Ok, Ação Cancelada")
        })
    })
}