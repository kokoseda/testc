Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @kokoseda Sign out
0
0 0 kokoseda/testc
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
testc/bot16.js
eea3732  just now
@kokoseda kokoseda Create bot16.js
    
49 lines (34 sloc)  1.78 KB
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222171280343058";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** فرعونفؤعونفؤعونفؤعونفؤعونفؤعونفرعونفؤعونفؤعونفؤعونفؤعونفرعونفرعونفرعونفؤعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفؤعونفؤعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفؤعونفرعونفرعونفؤعونفرعونفرعونفؤعونفؤعونفؤعونفؤعونفؤعونفؤعونفرعونفرعونفرعونفرعونفرعونفؤعونفرعونفرعونفرعومفرعون **')
    },305);
})



client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222171280343058";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222171280343058";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@314135031029170197>')
    },86400);
})


client.on('message', message => {
if(message.content.startsWith('17s')) {
if(message.author.id !== "314135031029170197") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 





client.login(process.env.BOT_TOKEN17); 
