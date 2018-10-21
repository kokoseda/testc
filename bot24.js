const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222209574207489";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** فرعونفؤعونفؤعونفؤعونفؤعونفؤعونفرعونفؤعونفؤعونفؤعونفؤعونفرعونفرعونفرعونفؤعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفؤعونفؤعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفرعونفؤعونفرعونفرعونفؤعونفرعونفرعونفؤعونفؤعونفؤعونفؤعونفؤعونفؤعونفرعونفرعونفرعونفرعونفرعونفؤعونفرعونفرعونفرعومفرعون **')
    },305);
})



client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222209574207489";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('ready', async() => {
var server = "495608433064673281"; // ايدي السررفر
var channel = "503222209574207489";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#rep <@314135031029170197>')
    },8.64e+7);
})


client.on('message', message => {
if(message.content.startsWith('24s')) {
if(message.author.id !== "314135031029170197") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});
 





client.login(process.env.BOT_TOKEN24); 
