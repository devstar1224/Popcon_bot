/*
@ Autor devstar1224
*/
var fs = require('fs');
var Discord = require('discord.js')
var bot = new Discord.Client()
const DBL = require("dblapi.js");
let db_config = require('./db_config.js')
let mysql = require('mysql');
let connection = mysql.createConnection(db_config);

// You can setting here to
const prefix = ''; // Setting prefix
const ownerID = ''; // Setting ownerID
const token = ''; //setting bot token
const dbl = new DBL('', bot);
// here

const active = new Map();
	bot.on('message', message =>{
	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();

	if(message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;
//command handler
 	try {
		set();
		// auto reload (options)
		// delete require.cache[require.resolve(`./commands/${cmd}.js`)];
		console.log(`${message.guild.id} command: ${cmd} ${args}`);
		let ops = {
			ownerID: ownerID,
			active: active
		}
		// select auto commands /% DO NOT OVERLAP commandFile  %/

		// let commandFile = require(`./commands/${cmd}.js`);
		let commandFile = require(`./command.js`);
		commandFile.run(bot, message, args, ops, prefix, cmd);

 	} catch (e) {
 			console.log(e);
 	}
	bot.on('error', console.error);
});

//login using auth
bot.login(token).catch(console.error);

// discordbots.org count api
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})


function set() {
	try {
	sql =`SELECT * FROM server_public_settings;`;
	connection.query(sql, function(error, result, fields) {
		if (error) {
					console.log(error);
		}else {
						bot.user.setActivity(result[0]['activity']);
		}
	});

	} catch (e) {
console.log(e);
	}
}
