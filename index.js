const dotenv = require('dotenv')
const result = dotenv.config({path: 'process.env'})
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Ready!');
})

client.on('messageCreate', msg => {
    if (msg.author.bot) {
        return false;
    } else {
        if (msg.content.toLowerCase().includes('stuff')) {
            msg.reply(`i'm stuff`)
        }
    }
    
});

client.login(process.env.TOKEN);