const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
  if (typeof String.prototype.reverse != 'function') {
      String.prototype.reverse = function() {
              return this.split("").reverse().join("")
      };
  }
  let reversed = args.join(" ").reverse()
  if(reversed.includes("@everyone") || reversed.includes("@here")) {
      const embed = new Discord.RichEmbed()
          .setTitle("Ale śmieszne...")
          .setDescription(reversed)
          .setColor(config.embed_color)
          .setFooter("neobot!", client.user.avatarURL)
        message.channel.send({ embed });
  }  else {
      message.channel.send(reversed)
  }
}
module.exports.help = {
  name: "reverse",
  category: "fun",
  description: "Potrzebujesz tekstu od tyłu? reverse tekst"
}
