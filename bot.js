const Discord = require('discord.js');                 
const db = require('quick.db');        
const client = new Discord.Client();                    
const giphy = require('giphy-api')();                              
const googl = require('goo.gl');           
const translate = require('google-translate-api');     
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id');                        
const moment = require("moment");                       
const { Client, Util } = require('discord.js');              
const UserBlocked = new Set();            
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};       
const prefix = '.';
                 
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log(`Logged in as ${client.user.tag}!`);   
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log('Galaxy Team')
  console.log('')  
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
});

//---------------- Casino Games 

client.on('message', message => {
if(message.content.startsWith("#slots")) {
let slot1 = [':green_apple:', ':grapes:', ':cherries:', ':reminder_ribbon:', ':8ball:', ':slot_machine:', ':peach:', ':strawberry:'];
let slot2 = [':green_apple:', ':grapes:', ':cherries:', ':reminder_ribbon:', ':8ball:', ':slot_machine:', ':peach:', ':strawberry:'];
let slot3 = [':green_apple:', ':grapes:', ':cherries:', ':reminder_ribbon:', ':8ball:', ':slot_machine:', ':peach:', ':strawberry:'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1 === slots2 && slots2 === slots3) {
we = "**Congratulation You Won :sparkles:**."
} else {
we = "**Good Luck Next Time :broken_heart:**. "
}
message.channel.send(`${slots1} | ${slots2} | ${slots3}`)
message.channel.send(`${we}`)
}
});

























client.login(process.env.BOT_TOKEN);
