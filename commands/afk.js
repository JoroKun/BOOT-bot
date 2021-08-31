const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: 'afk',
  description: 'makes you afk',
  async execute(message, args) {
    const content = args.join(" ")
    
    await db.set(`afk-${message.author.id}+${message.guild.id}`, content)

message.reply(`I set your afk: ${content}`)

  }
}