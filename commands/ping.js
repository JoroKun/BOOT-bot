
const Discord = require('discord.js');
 
module.exports = {
    name: 'ping',
    description: "gives the prefix",
    execute(message){
      const pingEmbed = new Discord.MessageEmbed()
        .setTitle('You have Pinged BOOT!')
        .setDescription('The Prefix is `k!`')
        .addFields(
          {name: 'For help use:', value: '`k!help`'}
        )
        .setTimestamp();

      message.channel.send(pingEmbed);
   }

}
