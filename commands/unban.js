const Discord = require('discord.js');
const ban = require('./ban');

module.exports = {
    name: 'unaban',
    description: "unbans previously banned member",
    execute(message){
        
        if(message.member.permissions.has("BAN_MEMBERS")){

            const userID = args[0]
        if(!userID) return 
        const newembed = Discord.MessageEmbed()
        .setTitle(`${message.author.username} please provide a user ID to unabn`)
        .setTimestamp()

        message.channel.send(newembed)

        message.guilds.fetchBans().then(bans => {
            if(ban.size == 0) return
            let bannedUser = bans.find(b => b.user.id == userID)

            if(bannedUser){
                const embed = new Discord.MessageEmbed()
                .setTitle('User Unbanned')
                .setDescription(`${userID} has been unbanned.`)

                message.channel.send(embed).then(message.guilds.members.unban(bannedUser.user))
                
                
            }

            else {
                message.reply('Invalid banned User ID.')
            }
        })
        
        }
        
        
    }
}