const Discord = require('discord.js');


module.exports = {
    name: 'punch',
    description: "punches the person mentioned",
    execute(message){
        images = [
          "https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446",
          "https://i.pinimg.com/originals/f3/ec/8c/f3ec8c256cb22279c14bfdc48c92e5ab.gif",
          "https://media3.giphy.com/media/xUO4t2gkWBxDi/giphy.gif",
          "https://i.chzbgr.com/full/8583163648/h2396FC8A/screw-you-power-star",
          "https://media0.giphy.com/media/12NV85Ttcs71Kg/giphy-downsized.gif"
        ]


        personpunced = message.mentions.users.first()
        let punchEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} punches ${personpunced.username} That must've hurt...`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setTimestamp()

        message.channel.send(hugEmbed)

    }
    }
