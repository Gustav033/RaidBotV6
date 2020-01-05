exports.run = async (client, message) => {
  setInterval(()=>{
    message.channel.send("@everyone | @here")
    message.channel.send("@everyone | @here")
    message.channel.send("@everyone | @here")
    message.channel.send("@everyone | @here")
  },1)
}