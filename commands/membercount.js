const Discord = require('discord.js');


module.exports = {
    name: 'membercount',
    description: 'shows how many members are there in the server',
    execute(message){
        //const membersInServer = message.guild.memberCount;
        const memberEmbed = new Discord.MessageEmbed()
        .setTitle('Membercount')
        .setDescription(`${message.guild.memberCount} members`);

        message.channel.send(memberEmbed);
    }
}
