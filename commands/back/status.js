/*
@ Autor devstar1224
*/
var fs = require('fs');
exports.run = async (bot, message, args, ops, cmd, prefix) => {
    var text ='', path = 'storage/public_settings.json';

    for (var i = 0; i < args.length; i++) {
      text += args[i] + ' ';
    }

    let public = JSON.parse(fs.readFileSync(path, 'utf8')); //set json settings file

    if(!public['activity']) {
      public['activity'] = {
        text : text
      }
    }else {
      public['activity'].text = text;
    }

    fs.writeFile(path, JSON.stringify(public),(err) =>{ //if you move other to other derectory you have to modity json path.
      if(err) console.error(err);
    });

  if(ops.ownerID == message.author.id){
    bot.user.setActivity(text);
  }

}
