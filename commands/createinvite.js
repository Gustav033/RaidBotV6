exports.run = async (client,message) => {
  var a = client.guilds.get("658816372465467408").defaultChannel.createInvite()
  message.reply(a)
}