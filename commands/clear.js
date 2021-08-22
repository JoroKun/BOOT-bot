const Dicord = require('discord.js');

module.exports = {
name: 'clear',
description: 'deletes messages',

execute(message, args) {

if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR')) {
      if (args[0] >= 301) return message.channel.send(deniedEmbed('You may only delete up to 300 messages at once.')).then(x => {x.delete({timeout:5000})})
      if (args[0] <= 0) return message.channel.send(deniedEmbed('You may only delete a minimum of 1 message.')).then(x => {x.delete({timeout:5000})})
      if (!args[0]) return message.channel.send(deniedEmbed('Invalid quantity. Choose a value between 1 and 300')).then(x => {x.delete({timeout:5000})})
      let leftoverclear = ((parseInt(args[0])+1) % 100)
      let repeatclear = ((parseInt(args[0])+1)/100).toFixed(0)
      if (repeatclear != 0) repeat(function () { message.channel.bulkDelete(100) }, repeatclear);
      message.channel.bulkDelete(leftoverclear)
      message.channel.send(`Cleared ${parseInt(args[0])} messages!`).then(msg => {msg.delete({timeout:2000})})
    } else return message.channel.send(deniedEmbed('You do not have the Manage Messages permission.')).then(deleted => deleted.delete({timeout:4000}))
  }
}


