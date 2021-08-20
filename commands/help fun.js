const Discord = require('discord.js');
 

module.exports = {
    name: 'help fun',
    description: "includes fun commands",
    execute(message){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9FE2BF')
        .setTitle('Administrative Commands')
        .setDescription('The Prefix is `k!`')
        .addFields(
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
            {name: '', value: ''},
            
        )
        .setFooter('This should help ya :>');

        message.channel.send(newEmbed);
    }
}
