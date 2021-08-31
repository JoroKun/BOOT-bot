const MessageEmbed = require('discord.js');

module.exports = {
  name: 'unmute',
  description: 'umutes the muted user',
  execute(message) {
    const muted = message.mentions.users.first()
    const memberMuted = message.guild.members.cache.get(muted.id);
    if(message.member.permissions.has('KICK_MEMBERS') || message.member.permissions.has('ADMINISTATOR')) {
      if(muted) {
        const mainrole = message.guild.roles.cache.find(role => role.name === '𝒸𝓊𝓉𝒾𝑒')
      const muterole = message.guild.roles.cache.find(role => role.name === 'Muted')

      memberMuted.roles.remove(muterole.id)
      }

      else {
        const embed = new MessageEmbed()
        .setTitle('I cant find that user')


      }
    }
    else {
      const newembed = new MessageEmbed()
      .setTitle('You Do not have permission to unmute users.')
      .setTimestamp()

      message.channel.send(newembed)
    }
   }
}