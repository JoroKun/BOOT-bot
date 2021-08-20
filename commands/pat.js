const Discord = require('discord.js');


module.exports = {
    name: 'pat',
    description: "pats the person mentioned",
    execute(message){
        images = [
          "https://media0.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",
          "https://media.tenor.com/images/a671268253717ff877474fd019ef73e9/tenor.gif",
          "https://media.tenor.com/images/385a8d13c1ee5213e560e07d12320d02/tenor.gif",
          "https://media1.tenor.com/images/8b5711095b0ba786c43b617bf9c675dd/tenor.gif?itemid=15735895",
          "https://media1.tenor.com/images/d7c326bd43776f1e0df6f63956230eb4/tenor.gif?itemid=17187002"
        ]


        personpatted = message.mentions.users.first()
        let patEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} pats ${personpatted.username}...There..There`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setTimestamp()

        message.channel.send(patEmbed)

    }
    }
