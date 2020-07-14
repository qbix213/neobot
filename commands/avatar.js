const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
const embed = new Discord.RichEmbed()
  .setColor(config.embed_color)
  .setTitle(`Avatar ${message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag}`)
  .setImage(message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL)
  .setTimestamp()
    .setFooter("neobot!", client.user.avatarURL)
  message.channel.send(embed)
}
module.exports.help = {
  name: "avatar",
  category: "fun",
  description: "potrzebujesz avatara - czyjegoś lub swojego? avatar (@osoba)"
}
