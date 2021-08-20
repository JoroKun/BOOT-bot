
const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () =>{
    console.log('Kuro is online');

    client.user.setPresence({ activity: { name: 'Over Looking For Someone', type: 'WATCHING'}, status: 'online' })
      .then(console.log)
      .catch(console.error);
});

const { prefix, token } = require ('./config.json');


const commandsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandsFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message =>{
    

    if(!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;
    const args = message.content.slice(prefix.length).split(/ +/ || " ");
    const command = args.shift().toLowerCase();

    const file = client.commands.get(command);
    if(file) file.execute(message, args, client,);
 

});


client.login(token);