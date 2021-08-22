const Discord = require('discord.js');


module.exports = {
    name: 'slap',
    description: "slaps the person mentioned",
    execute(message){
        images = [
          "https://media.tenor.com/images/9a2c17416b01df4363c05702a489425b/tenor.gif",
          "https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif",
          "https://media.tenor.com/images/3f9e6d5315b421c11cff659cd4a7a25e/tenor.gif",
          "https://i.imgur.com/fm49srQ.gif",
          "http://i1280.photobucket.com/albums/a489/Lilyfied/Anime%20Gif/slapgif_zps5164a18e.gif"
        ]


         const personslapped = message.mentions.users.first()
        let slapEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} slaps ${personslapped.username} *Ouch*`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setTimestamp()

        message.channel.send(slapEmbed)

    }
    }
