const MessageEmbed = require('discord.js');

module.exports = {
name: 'mute',
description: 'mutes a member',

execute(message, args) {
  const permission = message.member.permissions.has('KICK_MEMBERS') || message.member.permissions.has('ADMINISTRATOR')
  const target = message.mentions.users.first()

  if(permission) {
    if(target) {
      const mainrole = message.guild.roles.cache.find(role => role.name === '𝒸𝓊𝓉𝒾𝑒')
      const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
      const memberTarget = message.guild.members.cache.get(target.id)
    
    if(!args[1]) {
      memberTarget.roles.add(muteRole.id)

      const membed = new MessageEmbed()
      .setTitle(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`)
      .setTimestamp()
      message.channel.send(membed)
      return;
    }
    setTimeout( function() {
      memberTarget.roles.remove(muteRole.id)
    }, ms(args[1]));


    }
    else {
      const embed = new MessageEmbed()
      .setTitle('I cant find that person')
      .setTimestamp()

      message.channel.send(embed)

    }
  }
}
}