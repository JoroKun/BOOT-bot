const Discord = require('discord.js');


module.exports = {
    name: 'kiss',
    description: "kiss the person mentioned",
    execute(message){
        images = [
          "https://media1.tenor.com/images/2f23c53755a5c3494a7f54bbcf04d1cc/tenor.gif?itemid=13970544",
          "https://78.media.tumblr.com/3d93be7699a2ba8b4bc13a29a37b84ad/tumblr_odt2geMkpc1t86l7wo1_500.gif",
          "https://cdn.myanimelist.net/s/common/uploaded_files/1483588705-b321623c459d2a7001761459d2c8707a.gif",
          "http://37.media.tumblr.com/7bbfd33feb6d790bb656779a05ee99da/tumblr_mtigwpZmhh1si4l9vo1_500.gif",
          "https://thumbs.gfycat.com/SharpColossalHuia-max-1mb.gif"
        ]


        personkissed = message.mentions.users.first()
        let kissEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} kisses ${personkissed.username} *Smooch*`)
        .setImage(images[Math. floor(Math. random()*images. length)])
        .setTimestamp()

        message.channel.send(kissEmbed)

    }
    }
