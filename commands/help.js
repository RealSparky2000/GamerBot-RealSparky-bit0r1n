const Discord = require('discord.js')

module.exports.run = async (client, message, args, ops) => {
  
 message.channel.send(`:clipboard: **GamerBot's Command List**

\`\`\`Daily Commands\`\`\`

:minidisc: **Core** - \`help\`, \`ping\`
:tada: **Fun** - \`say\`, \`gay\`, \`deltarune\`
:level_slider: **Utilities** - \`vote\`
:tools: **Server Options** - \`avatar\`, \`userinfo\`
                      
\`\`\`Gaming Commands\`\`\`
:keyboard: **osu!** - \`oprofile\`, \`obeatmap\` (RealSparky working on that)
:mouse_three_button: **Geometry Dash** - \`gdstats\`, \`gddaily\`, \`gdweekly\`, \`gdlevelinfo\`

\`\`\`Links\`\`\`
:busts_in_silhouette: **Owners** - \`RealSparky\`, \`bit0r1n\`
`);
}
  
  
  module.exports.help = {
  name: "help",
  category: "Category 1"
}
