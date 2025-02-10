//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "24177059320";
global.owner = process.env.OWNER_NUMBER || "24177059320";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05DQjRyL3hhSjNJSmsrcFA2NWdxVWkyR0lyN0FXbXNJM3I3QzZ5Q3kyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWxNbGt5Qm56T2NlTzhuaFhFSTloaW9IVlI0Sko0TitMWFArcFdjZ2tsdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSndneHJSenp0YStlb3Bqdkh6SmxBVktlNjNWQ2UyT3BWc3FEc2RWN1VVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwYzlJYlRDMlltMVdOMGpXUmE2ZXZrR092TXEzS1VuSEM5aEoyVFVPRlVFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdQSTR4YXlnc0hRRlJNUEZoaGxjTU0wOHk3ZUd4cmtvQldXTDBWNHFCSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdVTHpyb2lybW04cE1pcGJrd0RtQ0xtYkJCMU92ZEhvNklaNDA5QkQxbkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUl3Wm1BUitwMEVDQ2wzeGtZYnpRRWFrN2tDWFdEbXpudXArYko4amhIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3VIS29tODE2ajltSXlOQlYvSG9BOGhRNTNUY3N2V29zdVBVMWhlYkx3VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVwZnlQZWMyTkdZZzhKMmxISUhodk5ScFowU0NPOU5mZEc5K0U0YlVoOTZJaE9sLzE4ZTIyNUZsWHlaeXd6Z0xjSVFURU1hOXllQzlMZFBZdWZqQ2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiTUUwajZqczZ1aTlJWWovK2lyRlk1dm1YSi9WYjZRYUZpaWxtMnVzZ1dxST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMjE3ODQ0NzE2OTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUFFQkMzRDZCMEM4Q0M4RkZCMUYzQTc1MkE2MEQwNkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczOTIyNDYzMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieE44R1VoWXJUZHlDei1QNEViZ3dRQSIsInBob25lSWQiOiI0NDgzOThlZS1mMmNlLTQ3NjItYTVlOS05YmRhNGI4ZmZlZWYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3NCMmpsN2Jzb3AyUzFJUUtXOWF1K0tXUWVzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRFSDhnd3ZSb1BQNzBrWHpxazUwNk5kSGQzcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDU0MxWU1CViIsIm1lIjp7ImlkIjoiMjIxNzg0NDcxNjk2OjUxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKM2orQVlRcHV5cHZRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpUlRuYXBqcGswYXpPOU8wNUQrN25iR2tjVmdwa254Tk1iSGxKZ0EyV1RVPSIsImFjY291bnRTaWduYXR1cmUiOiJzdys5S2NxU08yUklFMUM1ai9qT0ZxWmhVcERWM0NUS285ZE1yL1J0eE5IL3U4ejFnTVZwR3JhdDJUUW5IUUFDN2hYWVBobDFTZkkxUzdRNlFWaUJCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOER4eUo2M3djRDkzcVczQ3dzSzdMZEkxZ3VhYlNDWjlCTllWNXEzZEhEN2YxUVVucnZtNEJuUFh4aE9CekRtNkNSRmwvSEZ0aHV6UW0yMVpHbjN5aVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3ODQ0NzE2OTY6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWtVNTJxWTZaTkdzenZUdE9RL3U1MnhwSEZZS1pKOFRUR3g1U1lBTmxrMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTIyNDYyNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFeWkifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
