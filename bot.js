/*
@ Autor devstar1224
*/

var Discord = require('discord.js')
var bot = new Discord.Client()
const DBL = require("dblapi.js");
const dbl = new DBL('', bot); // setting https://discordbots.org/servers token

// You can setting here to
const prefix = '>'; // Setting prefix
const ownerID = ''; // Setting ownerID
const token = ''; //setting bot token
// here

const active = new Map();
bot.on('message', message =>{
	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();

	if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;

//command handler
 	try {
		// auto reload (options)
		// delete require.cache[require.resolve(`./commands/${cmd}.js`)];

		let ops = {
			ownerID: ownerID,
			active: active
		}
		// select auto commands /% DO NOT OVERLAP commandFile  %/

		// let commandFile = require(`./commands/${cmd}.js`);
		let commandFile = require(`./command.js`);
		commandFile.run(bot, message, args, ops, prefix, cmd);
 	} catch (e) {
 			console.log(e.stack);
 	}
});

//login using auth
bot.login(token);

// discordbots.org count api
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
