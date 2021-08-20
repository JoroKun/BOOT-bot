const Discord = require('discord.js');


module.exports = {
    name: 'kill',
    description: "kills the person mentioned",
    execute(message){
        images = [
          "https://media1.tenor.com/images/ff2dcd44504000e320c21ae5682b5369/tenor.gif?itemid=5749160",
          "https://static.wikia.nocookie.net/onepunchman/images/b/b0/Saitama_kills_the_Deep_Sea_King.gif/revision/latest?cb=20200422153810",
          "https://i.pinimg.com/originals/19/ce/89/19ce895b315fd7fb7d0cc078f74d4b25.gif",
          "https://i.gifer.com/NqGI.gif",
          "https://i.kym-cdn.com/photos/images/original/000/966/850/d79.gif"
        ]


        personkilled = message.mentions.users.first()
        let killEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} kills ${personkilled.username}`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setTimestamp()

        message.channel.send(killEmbed)

    }
    }
