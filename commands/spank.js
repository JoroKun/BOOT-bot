const Discord = require('discord.js');

module.exports = {
    name: 'spank',
    description: "spanks the person mentioned",
    execute(message){
        images = [
          "https://media.tenor.com/images/d75aead0dbf59fff4b996ebfecde0560/tenor.gif",
          "https://thumbs.gfycat.com/AggressiveWellwornAsianpiedstarling-max-1mb.gif",
          "https://thumbs.gfycat.com/FlimsyEnchantedIrishsetter-max-1mb.gif",
          "https://media1.tenor.com/images/846cab0c4c9237208eabd418e5ddd8a6/tenor.gif?itemid=13605375",
          "https://media1.tenor.com/images/133b76635205add9f35a3887181c21be/tenor.gif?itemid=16393042"
        ]


        personspanked = message.mentions.users.first()
        let spankEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} spanks ${personhugged.username} *owww owww oww*`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setTimestamp()

        message.channel.send(spankEmbed)

    }
    }
