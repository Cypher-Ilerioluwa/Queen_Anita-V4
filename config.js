global.owner = [
  "2347043759577",
  ""
]
global.anitav4 = "ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀"
global.ownername = "Cypher Ìléríolúwa"
global.packname = "Cypher Ìléríolúwa"
global.author = "Cypher Ìléríolúwa"
global.channelname = "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋"
global.channeljid = "120363315231436175@newsletter"
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.autoViewStatus = true;   // Set to true to automatically read statuses
global.AUTOSTATUS_REACT = true;   // Set to true to automatically like statuses
global.autoLikeEmoji = "💚";    // Default emoji for liking statuses

global.LEVELUP = false;


global.ANTIVIEWONCE = true;

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = ["2349066528353@s.whatsapp.net", "2348129988915@s.whatsapp.net"]; // Add the JIDs of sudo users



global.public = false


global.ANTIDELETE = true;  

global.unavailable = true;     
//to show your real presence  
global.available = true;   
// to show always online  
global.autoreadmessages = false;   
///To always read messages
global.chatbot = false;
global.autoreact = false;

global.WELCOME = true;

global.prefix = '/';

global.autobio = false;

global.ANTICALL = false;

global.antilink = false;

global.antilinkkick = false;

global.antilinkwarn = false;

global.mess = {
    success: '𝙳𝚘𝚗𝚎',
    admin: '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: '_(❗This Command Can Only Be Used In Private Chat !*_',
    wait: '_*Please Wait*_',
    notregist: '_*You are not registered in the Bot Database. Please register first_*',
    premium: '_*Premium only" Want Premium? Chat Owner_*',
    endLimit: '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
