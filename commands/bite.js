const Discord = require('discord.js');
 

module.exports = {
    name: 'bite',
    description: "bites the person mentioned",
    execute(message){
        images = [
          "https://media.giphy.com/media/4JpvyNYuyf0aI/giphy.gif",
          "https://media.giphy.com/media/WW3NSMgcR4ZGM/giphy.gif",
          "https://media1.tenor.com/images/8099a2d3e3f820ddcf96072fc33ad332/tenor.gif?itemid=8231871",
          "https://media1.tenor.com/images/06f88667b86a701b1613bbf5fb9205e9/tenor.gif?itemid=13417199",
          "https://gnupluslinux.com/anime/biting/1554136706915.gif"
        ]


        personbit = message.mentions.users.first()
        const biteEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} bites ${personbit.username} *nom nom nom*`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setColor('RANDOM')
        .setTimestamp()

        message.channel.send(biteEmbed)

    }
    }
