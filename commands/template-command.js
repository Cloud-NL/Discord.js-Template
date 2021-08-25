const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['template'], // Command name
    callback: (message, args, Discord) => {
        const embed = new MessageEmbed() // This is a example to make an embed https://discordjs.guide/popular-topics/embeds.html#embed-preview
        .setTitle("Your title here") // Title
        .setDescription("Your description here") // Description
        .setColor("WHITE") // Embed color
        .setAuthor("Author here") // Author
        .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // Url for title
        .setThumbnail("https://cdn.discordapp.com/attachments/866432665288572948/880234894985416704/meta-image.png") // Set a thumbnail for embed
        .setImage("https://cdn.discordapp.com/attachments/866432665288572948/880234894985416704/meta-image.png") // Set image for embed
        .addField("Title of field", "Main field") // Field you can add more
        .setTimestamp() // Timestamp
        .setFooter("This is a template footer", "https://cdn.discordapp.com/attachments/866432665288572948/880234894985416704/meta-image.png") // Footer

        message.channel.send({embeds: [embed]}) // Send embed
    }
}