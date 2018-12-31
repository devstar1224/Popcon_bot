/*
@ Autor devstar1224
*/
var fs = require('fs');

exports.run = (bot, message, args, ops, cmd) => {

  let server_id = message.guild.id;
  let serverData = JSON.parse(fs.readFileSync('storage/server_settings.json', 'utf8')); //set json settings file

  let fetched = ops.active.get(message.guild.id);

  if (cmd) { // if user requset is commands but from to play.js cmd value is 0, so don't send under the messages.
    if (!(message.guild.ownerID == message.author.id)) {
       return message.reply("입력하신 명령어의 권한이 없습니다. 서버 관리자에게 문의하세요.");
    }

    if (!fetched) return message.channel.send('현재 음악이 재생되고 있지 않습니다.');
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('음성 채널에 연결되어 있지 않습니다.');
    if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('0 에서 200 사이의 숫자를 입력하세요.');
      if(!serverData[server_id]) {
        serverData[server_id] = {
          volume : args[0]
        }
      }else {
        serverData[server_id].volume = args[0];
      }
      fs.writeFile('storage/server_settings.json', JSON.stringify(serverData),(err) =>{ //if you move other to other derectory you have to modity json path.
        if(err) console.error(err);
      });
    message.channel.send(`볼륨을 ${args[0]} 으로 설정합니다.`);
  }

  if (!serverData[server_id]) {
      serverData[server_id] = {
        volume : 100
      }
      fs.writeFile('storage/server_settings.json', JSON.stringify(serverData),(err) =>{ //if you move other to other derectory you have to modity json path.
        if(err) console.error(err);
      });
  }

// do not remove setTimeout, this function is wait for setting fetched at play.js
  setTimeout(function() {
    fetched.dispatcher.setVolume(serverData[server_id].volume/100);
  }, 20, 'funky');

}
