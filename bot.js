const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });;
client.commands = new Discord.Collection();
const { Player } = require("discord-player");

// Create a new Player (you don't need any API Key)
const player = new Player(client);

// add the trackStart event so when a song will be played this message will be sent
player.on("trackStart", (queue, track) => queue.metadata.channel.send(`🎶 | Now playing **${track.title}**!`))

client.once('ready', () =>{
    console.log('Kuro is online');

    client.user.setPresence({ activity: { name: 'Over Looking For Someone', type: 'WATCHING'}, status: 'online' })
      .then(console.log)
      .catch(console.error);
});
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    // /play Despacito
    // will play "Despacito" in the voice channel
    if (interaction.commandName === "play") {
        if (!interaction.member.voice.channelId) return await interaction.reply({ content: "You are not in a voice channel!", ephemeral: true });
        if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: "You are not in my voice channel!", ephemeral: true });
        const query = interaction.options.get("query").value;
        const queue = player.createQueue(interaction.guild, {
            metadata: {
                channel: interaction.channel
            }
        });
        
        // verify vc connection
        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        } catch {
            queue.destroy();
            return await interaction.reply({ content: "Could not join your voice channel!", ephemeral: true });
        }

        await interaction.deferReply();
        const track = await player.search(query, {
            requestedBy: interaction.user
        }).then(x => x.tracks[0]);
        if (!track) return await interaction.followUp({ content: `❌ | Track **${query}** not found!` });

        queue.play(track);

        return await interaction.followUp({ content: `⏱️ | Loading track **${track.title}**!` });
    }
});


const token = process.env.TOKEN
const prefix = process.env.PREFIX


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
