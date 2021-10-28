const express = require('express');
const { port } = require('./config.json');

const app = express();

const dotenv = require('dotenv')
const result = dotenv.config({path: 'process.env'})
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

app.get('/', (request, response) => {
	return response.sendFile('index.html', { root: '.' });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

client.once('ready', () => {
    console.log('Ready!');
})

client.on('message', msg => {
    msg.reply('hiyo')
});

client.login(process.env.TOKEN);