const Discord = require('discord.js');


module.exports = {
    name: 'help',
    description: "includes necessary basic info on the bot",
    execute(message){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9FE2BF')
        .setTitle('Basic Stuff')
        .setDescription('Commands are divided into different sections, please the following commands as per the section')
        .addFields(
            {name: 'Prefix', value: '`k!'},
            {name: 'Administrative Cmds', value:'` k!help admin`'},
            {name: 'Reaction roles', value: '`k!help rr`'},
            {name: 'Music cmds', value: '`help music`'},
            {name: 'Welcome message', value: '`k!help welcome`'},
            {name: 'Fun', value: '`k!help fun`'},
            {name: 'Info', value: '`k!help info`'}
        )
        .setThumbnail('https://cdn.discordapp.com/avatars/871217618483310653/90174aa9c107afc27998e0cb05733eb9.png')
        .setFooter('This should help ya :>');

        message.channel.send(newEmbed);
    }
}
