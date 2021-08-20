const Discord = require('discord.js');


module.exports = {
    name: 'fuck',
    description: "does lewd things the person mentioned",
    execute(message){
        images = [
          "https://media1.tenor.com/images/9862e3023816f54bc451ee1cfed2351f/tenor.gif?itemid=5453531",
          "https://i.gifer.com/EFYZ.gif",
          "http://pa1.narvii.com/6046/672726f004548a41df4c3ddd3004be2dadfec739_hq.gif",
          "https://38.media.tumblr.com/ffe6b3b2de0f260ea996538f83bddf8a/tumblr_na9u5iglEE1r3z16po1_500.gif",
          "https://i.kym-cdn.com/photos/images/original/000/949/310/086.gif"
        ]


        personhugged = message.mentions.users.first()
        let lewdEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} does lewd stuff to ${personhugged.username}`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setTimestamp()

        message.channel.send(lewdEmbed)

    }
    }
