/*
@ Autor devstar1224
*/

/*
commands is collect help commant of commands object
when you want modify help commant of commands, edit commands of object or append the Object

var commands = {
command : [user_input_command],
howto : [], //option. if you blank here do not fill
help : [], //help this command
filename : [] //real commands file include extension
};
command_array.push(commands); // append the object in the array
*/

var command_array = new Array();
var commands = new Object();

// You can setting here to

//ping
var commands = {
command : "ping",
howto : "",
help : "봇의 평균 접속 핑 상태를 알려줍니다.",
filename : "ping.js"
};
command_array.push(commands);

//help
var commands = {
command : "help",
howto : "",
help : "봇을 사용할수 있는 명령어들을 알려줍니다.",
filename : "help.js"
};
command_array.push(commands);

//play
var commands = {
command : "p",
howto : "[곡이름]",
help : "유튜브를 검색해 사용자가 입력한 음악을 검색해 재생합니다.",
filename : "play.js"
};
command_array.push(commands);

//queue
var commands = {
command : "q",
howto : "",
help : "지금까지 예약한 음악을 볼수 있습니다.",
filename : "queue.js"
};
command_array.push(commands);

//skip
var commands = {
command : "s",
howto : "",
help : "현재 재생중인 음악을 스킵투표를 합니다.",
filename : "skip.js"
};
command_array.push(commands);

//skipadmin
var commands = {
command : "fs",
howto : "",
help : "현재 재생중인 음악을 강제 스킵합니다. / 서버관리자전용",
filename : "skipadmin.js"
};
command_array.push(commands);

//volume
var commands = {
command : "volume",
howto : "[0 ~ 200]",
help : "음악의 볼륨을 조정합니다. / 서버관리자전용",
filename : "volume.js"
};
command_array.push(commands);

//set play now game
var commands = {
command : "stat",
howto : "[입력할말]",
help : "봇의 플레이 하는 게임의 상태를 바꿉니다. / 봇 관리자 전용",
filename : "status.js"
};
command_array.push(commands);
//here

exports.run = async (bot, message, args, ops, prefix, cmd) => {
  try {
    for (var i = 0; i < command_array.length; i++) {
      if (command_array[i].command == cmd && cmd == "help") {
        let commandFile = require(`./commands/`+ command_array[i].filename);
        commandFile.run(bot, message, args, ops, command_array, prefix);
        break;
      }else if (command_array[i].command == cmd) {
      let commandFile = require(`./commands/`+ command_array[i].filename);
      commandFile.run(bot, message, args, ops, cmd);
      break;
      }
    }
  } catch (e) {
    		console.log(e.stack);
  }
}
