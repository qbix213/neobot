const Discord = require('discord.js');
const client = new Discord.Client({
  disableEveryone: true
});
const fs = require('fs')
client.commands = new Discord.Collection();
const config = require('./config.json')
client.on('ready', () => {
  console.log("[client] Logowanie jako neonable!...")
  console.log("[client] Zalogowano!")
  console.log(`[client] Bot obsługuje ${client.guilds.size} serwerów, ${client.channels.size} kanałów, oraz ${client.users.size} użytkowników`)
  client.generateInvite()
  .then(link => console.log(`Zaproszenie: ${link}`))
})

fs.readdir(`./commands/`, (err, files) => {
  if (err) console.log(err)
  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if (jsfile.length <= 0) {
    console.log("Nie znaleziono komend!")
  }
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`[Załadowano] ${f}`)
    client.commands.set(props.help.name, props)
  })
})

client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return message.channel.send('Pisz na serwerach, dm-y nie obsługiwane.');
var prefix = "?"
      if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      let commandfile = client.commands.get(command);
     if (commandfile) {
       message.react(client.guilds.get("438388747088822292").emojis.get("464105258549772289"));
       commandfile.run(client, message, args, config);
     } else {
       message.react(client.guilds.get("438388747088822292").emojis.get("464107488053166101"))
     }
})

client.login(process.env.TOKEN)
