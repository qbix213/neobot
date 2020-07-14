const Discord = require('discord.js')
module.exports.run = async (client, message, args, config) => {
    if (!message.member.hasPermission("BAN_MEMBERS", false, true, true))
      return message.channel.send('Nie masz uprawnień 🤣')

    let member = message.mentions.members.first();
    if (!member)
      return message.reply("Musisz kogoś oznaczyć.");
    if (!member.bannable)
      return message.reply("Nie mogę tego zrobić! Czy mam uprawnienia?");

    let reason = args.slice(1).join(' ');
    if (!reason) return message.channel.send('Proszę o powód...')

    await member.send("Zostałeś(aś) zbanowany(a) na **" + message.guild.name + "**, z powodu " + reason + ". Zbanowany(a) przez " + message.author.tag + " (id: " + message.author.id + ").")
    .then(member.ban(7, reason))
      .catch(error => message.reply(`Ups, ${message.author}, nie powiadomiłem o banie, gdyż wystąpił błąd: ${error.message}`));
   let embed = new Discord.RichEmbed()
   .setTitle("Ban!")
   .setColor(config.embed_color)
   .setThumbnail(member.user.avatarURL)
   .addField("Osoba", member)
   .addField("Zbanowany(a) przez",message.author)
   .addField("Powód", reason)
   .setFooter("neobot!", client.user.avatarURL)
   message.channel.send({embed})
}
module.exports.help = {
  name: "ban",
  category: "admin",
  description: "Użyj aby zbanować członka: ban @osoba powód"
}
