const MessageEmbed = require('discord.js')

module.exports = {
  name: 'lock',

 async execute(message, args) {
    const permission = message.member.haspermission('KICK_MEMBERS') || message.member.haspermission('MANAGE_CHANNELS') || message.member.haspermission('ADMINISTRATOR')

    if(!permission) {
      const lockChannel = message.mentions.channel.first() || message.guild.channel.cache.get(args[0]);
      const role = message.guild.roles.cache.get(role => role.name === '𝒸𝓊𝓉𝒾𝑒')
      if(!lockchannel) lockChannel = message.channel;

      await lockChannel.updateOverwrites(role, {
        SEND_MESSAGES: false
      }).catch(err => console.log(err));
      
    }

    else { 
      const embed = new MessageEmbed() 
      .setTitle('You Do not have permission to use this command.')
      .setTimestamp()

      message.channel.send(embed)
    }
  }
}