const { Client, IntentsBitField } = require("discord.js");
const discord_token = process.env.discord_token;
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
console.log("test");
client.login(`${discord_token}`);
