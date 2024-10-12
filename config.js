//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "pauladedokun007@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/ITACHI-MD-pixel/ITACHI_x_RAGE";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/DAQHuiVkoQJEQ4esni38DA";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafgKHuDjiOa7y21kq37";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2c1f6c598eab67b0f8ffa.jpg";
global.devs = "https://t.me/alvindoxx";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Tgam36h.jpeg,https://telegra.ph/file/072fa6a932eab03639178.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtjVlcwbS80blI0b0ltRHhic0JVNitpbG1WRFNieFJROXFzL20wTGhsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2FqVVd0R09jaS9oN2MwZkZKZnE1U3dFYktuMmtxOUx4Z2twL1NxZHd3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RUoyU0gyaG5FUlFERzI0OGF1TmhIT0x4R2gyUi9RaURWVjcvRjZDdFZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrM3RJQzZTVkltUTFSWVZ4K1ovcWppZUpJblBlK0dGUTl0MHJKSTZ3bFhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRGSGg5bG03MXBzV0E0Mi9KdFUyK2NVa3A5Z0MvWUFab0NvcmVZUUR1VUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZFSnJ1VEV4RkVWczM4bFc3M3UxRHZVN3Y1VjBTTTZTSTBXQThhMnVHWFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlwcHI0M2JaRjlkWldhTGRib08rVXlyQWljVDVjNzMzcTZkQXUzc00xZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFY5OEhqV3RONWovTW45eU9LaUgydG9MQWhGL2tubjFPWk9XNytNYS9WST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdLdEFOUnlKWHhSaTc5K2hRbkpOOXZKRnFvNTZzNkpxNXUrNXlhMG5HaGl0SVd2djUxZWxoNEEvNzI2TDdETVdmU1VaN2NKZ0czMXA2N01keDZLWUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiI4ajR1SWtpVndNaEJ3Z3FDSTN1K3lvMFpFRmFmMWZuVk9YR2NQV00yaVJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvMU9qQXBFTFJiNm4zU3VuMlk1bGRnIiwicGhvbmVJZCI6IjYwYTE2YzYwLTcxYmEtNDYyZC1iZmNjLWI0MTNjZmVhOGJlYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSlZkK3R5Zm13cTRiMnd2YjhTeTE0MzJmaGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajhtTGVMZ3VSajJtZW5RWWliRkcvUnBVeFRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNCOTlUNk5EIiwibWUiOnsiaWQiOiIyMzQ4MDYwNDYzNzcxOjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lxMm9HZ1EvWjJxdUFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNhODJ4eTk0dFZLQnVnbWdBTHpQNU1CbVhSdVBiQ2dOTmxFWGdRdldLem89IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRCSEFjMDZmb3JURGlVaXRRMHpERjk5c0MvdVJMdVBrZHVxWEZ3RGJkcDRnYk92VW9YWnh2dzhTYjdBbUJVck01bXAvU2FSZ1RnMUxUTVdrY3gzMUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJwd2kyekVBL0prOTJtZDRPNFdJZnVMTjAwSXVnNHhpVXY4RXBNcFFEVXJIckZIdXpBZG5UWDJzbzVjdUVBOUo0eEUzazNFSDhvZzFpT2hhZFgxdDJBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNjA0NjM3NzE6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkMnZOc2N2ZUxWU2dib0pvQUM4eitUQVpsMGJqMndvRFRaUkY0RUwxaXM2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NzQ1MjI4fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ITACHI_x_RAGE™`",
  author: process.env.PACK_AUTHER || "ITACHI_x_RAGE",
  packname: process.env.PACK_NAME || "R A G E",
  botname: process.env.BOT_NAME || "ITACHI_x_RAGE",
  ownername: process.env.OWNER_NAME || "Paul Adedokun",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "R A G E").toUpperCase(),
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
