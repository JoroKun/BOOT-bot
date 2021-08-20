const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: "kicks the mentioned user",
    execute(message){
        const author = message.author.username;
        if(message.member.permissions.has("KICK_MEMBERS")){
            const member = message.mentions.users.first();
            
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();

                const kickembed = new Discord.MessageEmbed()
                .setTitle(`${member.id} has been kicked by ${message.author.username}!`)
                .setColor('RANDOM')
                .setTimestamp()

                message.channel.send(kickembed)

            }
            
            else {

                const errorembed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} Please specify someone to kick.`)
                .setColor('RANDOM')
                .setTimestamp()
                
                message.channel.send(errorembed)
            }
            
            
        }

        else {
            const newembed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}, you don't have permission to kick members.`)
            .setColor('RANDOM')
            message.channel.send(newembed)
        }
    }
}