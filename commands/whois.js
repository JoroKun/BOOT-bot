const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'whois',
    description: 'gives info about the mentioned or the user itself',
    execute(message) {
        const target = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(target.id)
       
        
        

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${target.username}`, target.displayAvatarURL({dynamic: true, size: 2048})) 
        .setThumbnail(target.displayAvatarURL({dynamic: true,}))
        .setColor('RANDOM')
        .addField('UserID', `${target.username}`, false)
        .addField('Roles', `${member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
        .addField("Server Joined At", `${moment(member.joinedAt).format('MMMM DO YYYY, h:mm:ss a')}\n**-** ${moment(member.joinedAt).startOf('day').fromNow()}`)
        .addField("Discord Joined At", `${moment(target.createdAt).format('MMMM DO YYYY, h:mm:ss a')}\n**-** ${moment(target.createdAt).startOf('day').fromNow()}`)
        .addField('UserID', `${target.id}`, false)
        .setTimestamp()
        message.channel.send(embed)
        
    }
}