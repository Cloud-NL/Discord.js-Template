const Discord = require("discord.js"); // Keep this

const { Client, Intents } = require('discord.js') // Keep this

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, "GUILDS", "GUILD_MEMBERS"] }); // Keep this

const fs = require("fs"); // Keep this

const { token, prefix } = require("./config.json"); // Keep this

const path = require("path"); // Keep this

client.on('ready', async () => {
    console.log("Your bot is ready!") // You can change this if you want
  
  const arrayOfStatus = [
  `Discord.js template`, // You can change this if you want
  ];
  
  let index = 0;
  setInterval(() => {
      if (index === arrayOfStatus.length) index = 0;
      const status = arrayOfStatus[index];
      client.user.setActivity(status);
      index++;
  }, 5000) // Keep this 5000

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')
})

client.login(token) // Secret token you can find this in your config.json file