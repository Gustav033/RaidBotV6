exports.run = async (client, message, args) => {
    let NovoNome = args.slice(0).join(" ")
    if(!NovoNome) return message.channel.send("Defina Um Nome Para O Server!")
    message.guild.setName(NovoNome)
    message.channel.send("Ok, Agora O Server Esta Com O Nome: " + NovoNome)
}