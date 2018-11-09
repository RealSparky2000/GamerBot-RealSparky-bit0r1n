const Discord = require('discord.js')
const moment = require("moment");
require("moment-duration-format");
const fs = require('fs');
const active = new Map();
const client = new Discord.Client();
client.commands = new Discord.Collection();

const prefix = 'gb!';
const ownerID = process.env.ownerID

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});

client.on("message", async message => {
  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  
    let ops = {
    ownerID: ownerID,
    active: active
  }
  
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args,ops);

});
client.on('ready', () => { 
  console.log('Laucnhed!')
  client.user.setActivity(`Playing on ${client.guilds.size} servers | gb!help`);
});
client.login(process.env.TOKEN)
