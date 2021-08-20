const Discord = require('discord.js');

module.exports = {
    name: 'cuddle',
    description: "cuddles the person mentioned",
    execute(message){
        images = [
          "https://i.imgur.com/p2Jt2P5.gif?noredirect",
          "https://i.gifer.com/CzCS.gif",
          "https://i.pinimg.com/originals/51/2a/f3/512af31e377153959dbad5b888d22af1.gif",
          "https://64.media.tumblr.com/53ce77a71d799c995ba75fb96a1300be/tumblr_o3ua9vZgh11udh5n8o1_500.gifv",
          "https://31.media.tumblr.com/e66b45dc71f2b4e29b9834034eba47cf/tumblr_mvo14g0ZX91rypg9ro1_500.gif"
        ]


        personcuddled = message.mentions.users.first()
        let cuddleEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} cuddles ${personcuddled.username}!`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setTimestamp()

        message.channel.send(cuddleEmbed)

    }
    }
