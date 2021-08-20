
 
const Discord = require('discord.js');
module.exports = {
    name: 'help admin',
    description: "includes commands for admins",
    execute(message){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9FE2BF')
        .setTitle('Administrative Commands')
        .setDescription('The Prefix is `k!`')
        .addFields(
            {name: '**Mute**', value: '``Command: mute [user mention or ID] [time] [reason]``'},
            {name: '**Unmute**', value: '``Command: unmute [user mention or ID]``'},
            {name: '**Kick**', value: '``Command: kick [user mention or ID] [reason]``'},
            {name: '**Ban**', value: '`Command: ban [user mention or ID] [Time] [reason]`'},
            {name: '**Unban**', value: '`Command: unban [userID]`'},
            {name: '**Clear**', value: '`Command: clear [number of messages]`'},
            {name: '**Lock**', value: '`Command: lock [channel mention]`'},
            {name: '**Unlock**', value: '`Command: unlock [channel mention]`'}
        )
        .setFooter('This should help ya :>');

        message.channel.send(newEmbed);
    }
}
