require("dotenv").config();

const { Client, IntentsBitField } = require("discord.js");
const TOKEN = process.env.TOKEN;
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

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "add") {
    const num1 = interaction.options.get("first-number")?.value;
    const num2 = interaction.options.get("second-number")?.value;

    // interaction.reply(`The sum is ${num1 + num2}`);
    console.log(num1);
  }

  // if (interaction.commandName === "hey") {
  //   interaction.reply("Yo!");
  // }

  // if (interaction.commandName === "ping") {
  //   interaction.reply("pong");
  // }
  // console.log(interaction);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "!rules") {
    message.reply("Oh you want rules ?");
  }

  if (message.content === "!mod") {
    message.reply("Fluuke Sama");
  }
});

client.login(`${TOKEN}`);
