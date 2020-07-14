const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
const commandHelp = client.commands.filter(cmd => cmd.help.name === args[0]).map(cmd => '\ ' + cmd.help.description + '\ ')
message.channel.send((commandHelp[0] !== undefined) ? commandHelp[0] : "Nie znam takiej komendy.")
}
module.exports.help = {
  name: "commandhelp",
  category: "help",
  description: "pomoc dla poszczególnych komend, commandhelp komenda"
}
