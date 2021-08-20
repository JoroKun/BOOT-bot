const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: "delets measages",
       execute(message, args){
        const messages = args[0]
        if(message.member.permissions.has("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()

        if(message.member.permissions.has("Manage_Members") || message.member.permissions.has("ADMINISTRATION")) {
            const messages = args[0]

        if(!messages){
            embed.setTitle('**Clear Command**')
            embed.setThumbnail("https://cdn.discordapp.com/avatars/871217618483310653/19b1a65ff09aeb7b8274d4a5f86083e3.png")
            embed.setDescription('Deletes ')
            
        }
        }

        

        
    } 
  }
} 