exports.run = async (client, message, args) => {
    let NovoNome = args.slice(0).join(" ")
    if(!NovoNome){
      NovoNome = "Hacked By Gustavo33"
    }
    message.guild.setName(NovoNome)
    message.channel.send("Ok, Agora O Server Esta Com O Nome: " + NovoNome)
}