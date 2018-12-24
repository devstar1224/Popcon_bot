/*
@ Autor devstar1224
*/

exports.run = async (bot, message, args, ops, command_array, prefix) => {
  var resp = '';
  var marge_highlight = marge_help = '';
  for (var i = 0; i < command_array.length; i++) {
    marge_highlight = prefix + command_array[i].command + " " + command_array[i].howto
    marge_help = " - " + command_array[i].help
      resp += (`\`${marge_highlight}\` ${marge_help} \n`);
  }
    message.channel.send(resp);
}
