const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
const tekst = (args[0] == "d") ? args.slice(1).join(" ") : args.join(" ")
if(tekst.includes("@everyone") || tekst.includes("@here")) return message.channel.send("Ale śmieszne...");
message.channel.send(tekst)
if(args[0] == "d") return message.delete();
}
module.exports.help = {
  name: "say",
  category: "fun",
  description: "Chcesz żebym coś powiedział? Użyj say (d) tekst"
}
