const Discord = require('discord.js');


module.exports = {
    name: 'hug',
    description: "hugs the person mentioned",
    execute(message){
        images = [
          "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
          "https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
          "https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif",
          "https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif",
          "https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif"
        ]


        personhugged = message.mentions.users.first()
        const hugEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} hugs ${personhugged.username}!`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setTimestamp()

        message.channel.send(hugEmbed)

    }
    }
