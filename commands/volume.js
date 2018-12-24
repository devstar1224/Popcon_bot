/*
@ Autor devstar1224
*/
var fs = require('fs');
var mysql = require('mysql')

var connection = mysql.createConnection({
    host : "localhost",
    port :  ,
    user : " ",
    password : " ",
    database : " "
})
connection.connect();

exports.run = (bot, message, args, ops, cmd, prefix) => {
try {
  let server_id = message.guild.id;
  let fetched = ops.active.get(message.guild.id);
  let sql;

  if (cmd) { // if user requset is commands but from to play.js cmd value is 0, so don't send under the messages.

  sql =`SELECT * FROM server_user_permission WHERE server_id=${server_id} AND permission = 'setdj' AND user_id = '${message.author.id}'`;
      connection.query(sql,function(error, result, fields) {
            if (error) {
              console.log(error);
            }else{
              if (result == 0) {
                if (!(message.guild.ownerID == message.author.id)) {
                  return message.reply("입력하신 명령어의 권한이 없습니다. 서버 관리자에게 문의하세요.");
                  }
                }

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('음성 채널에 연결되어 있지 않습니다.');
    if (!fetched) return message.channel.send('현재 음악이 재생되고 있지 않습니다.');
    if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('0 에서 200 사이의 숫자를 입력하세요.');

    sql =`SELECT * FROM server_settings WHERE server_id=${server_id}`;
        connection.query(sql,function(error, result, fields) {
              if (error) {
                console.log(error);
              }else{
                if (result == 0) {
                  sql =`INSERT INTO server_settings VALUES ('${server_id}', '${args[0]}');`;
                  connection.query(sql,function(error, result, fields) {
                    if (error) {
                      console.log(error);
                    }else {
                      fetched.dispatcher.setVolume(args[0]/100);
                      message.channel.send(`볼륨을 ${args[0]} 으로 설정합니다.`);
                    }
                });
                }else {
                  sql =`UPDATE server_settings SET volume = '${args[0]}' WHERE server_id = '${server_id}';`;
                  connection.query(sql,function(error, result, fields) {
                    if (error) {
                      console.log(error);
                    }else {
                      fetched.dispatcher.setVolume(args[0]/100);
                      message.channel.send(`볼륨을 ${args[0]} 으로 설정합니다.`);
                    }
                  });
                }
              }
            });
          }
        });

  }else{
    sql =`SELECT volume FROM server_settings WHERE server_id = '${server_id}';`;
    connection.query(sql,function(error, result, fields) {
      if (error) {
        console.log(error);
      }else {
        if (!(result == 0)) {
        setTimeout(function() { // do not remove setTimeout, this function is wait for setting fetched at play.js
          fetched.dispatcher.setVolume(result[0]['volume']/100);
        }, 20, 'funky');
        }
      }
    });
  }

} catch (e) {
   message.channel.send(e);
}
}
