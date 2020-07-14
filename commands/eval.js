const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
  if(message.author.id !== "316226442721755137") return message.channel.send("Zastanawiasz się do czego służy ta komenda? Może dla kogo? Dla neoney. Nikomu innemu.");
eval(`async function go() {
  ${args.join(" ")}
}
go()`)
}
module.exports.help = {
  name: "eval",
  category: "none",
  description: "Zastanawiasz się do czego służy ta komenda? Może dla kogo? Dla neoney. Nikomu innemu."
}
