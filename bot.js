require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({
  partials:["MESSAGE"]
});

client.on('ready', () => {
    console.log("Our Bot is Ready to go💛");
  });

  client.on('messageDelete', msg => {
    msg.channel.send("Stop Deleting Messages Bsdk")
  })

   const BOT_PREFIX="!"
   const MOD_ME_COMMAND="mode-me"

  client.on("message", msg => {
    if (msg.content === "Hi") {
      msg.reply("Hello!! buddy how are you?🙋🏼‍♂️");
    }
    if (msg.content === "Ak") {
      msg.react("💖");
    }if (msg.content === "bot") {
      msg.reply("Hello!! I am AK💛's Bot 🤖 ");
      msg.react("🌻");
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
      //Using function for add mod
      modUser(msg.member)
        
        msg.reply('Now You are a Mod ');

        
      }
  });
  
  function modUser(member){
    member.roles.add("840659159580934184");
  }
 
  client.login(process.env.BOT_TOKEN);