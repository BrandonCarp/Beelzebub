require("dotenv").config();

const { Client, IntentsBitField } = require("discord.js");
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online.`);
});

client.on("messageCreate", (message) => {
  console.log(message.content);
});

client.login(`${DISCORD_TOKEN}`);
