const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    description: "ban the mentioned user",
    execute(message){
        
        if(message.member.permissions.has("BAN_MEMBERS") || message.member.permissions.has("ADMINISTRATION")){
            const member = message.mentions.users.first();
            const messages = args[0]

            if(!messages){
                const infoembed = new Discord.MessageEmbed()
                .setTitle('**INFO**')
                .setDescription('**Command Name:** Ban\n**USAGE:** `ban [username or mention]`\n**EXAMPLE:** `ban @Doot`')
                .setTimestamp()
                .setThumbnail("https://cdn.discordapp.com/avatars/871217618483310653/19b1a65ff09aeb7b8274d4a5f86083e3.png")
            }
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();

                images = [
                    "https://media.giphy.com/media/jxqOV4sZ8eM5o4W16H/giphy.gif",
                    "https://media.giphy.com/media/1ZuKvb2mmgNS5X0stT/giphy.gif",
                    "https://c.tenor.com/m5Uwk-w7B18AAAAM/banned-thor.gif",
                    "https://i.pinimg.com/originals/b7/6d/d6/b76dd622eed1caf97855d378acb43548.gif",
                    "https://static.fjcdn.com/gifs/Its+a+ban+gif+party+post+your+favorite+banned+gifs_581bc1_4981613.gif",
                    "https://i.imgur.com/6Sh8csf.gif?noredirect",
                    "https://i.imgur.com/l5AFFhc.gif"
                ]

                const banembed = new Discord.MessageEmbed()
                .setTitle(`${member.id} has been banned by ${message.author.username}!`)
                .setColor('RANDOM')
                .setImage(images[Math. floor(Math. random()*images. length)])
                .setTimestamp()

                message.channel.send(banembed)

            }
            
            else {

                const errorembed = new Discord.MessageEmbed()
                .setTitle('**ERROR**')
                .setDescription(`${message.author.username} Please specify someone to ban.`)
                .setColor('RANDOM')
                .setTimestamp()
                
                message.channel.send(errorembed)
            }
            
            
        }

        else {
            const newembed = new Discord.MessageEmbed()
            .setTitle('**ERROR**')
            .setDescription(`${message.author.username}, you don't have permission to ban members.`)
            .setColor('RANDOM')
            .setTimestamp()
            message.channel.send(newembed)
        }

    }
}