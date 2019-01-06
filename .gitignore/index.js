const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready",function() {
    bot.user.setgame("inferno BOT,!action");
    console.log("Le bot a bien ete connecte");
    });

    bot.login("NTMxMjQyNDQ5NzU1MTc2OTcx.DxObFw.vhIJEu8RalyTsjE2Jv3WKrEzRSw");