const ytdl = require('ytdl-core-discord');
const MessageEmbed = require('discord.js');
const ytSearch = require('ytsearch')
const distube = require('distube')

module.exports = {
  name: 'play',
  description: 'plays music',
  async execute(message, args) {

    distube.play(message, args.join(" "))
    

    

  }

  
  }