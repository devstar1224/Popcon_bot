/*
@ Autor devstar1224
*/

exports.run = (bot, message, args, ops, cmd, prefix) =>{
	var input = message.content.toUpperCase();
		message.channel.send(`ping : ${bot.ping}`)
}
