/*
@ Autor devstar1224
*/
let db_config = require('../db_config.js')
let mysql = require('mysql');
let connection = mysql.createConnection(db_config);

exports.run = async (bot, message, args, ops, cmd, prefix) => { //careful the code is mess
  try {
  let fetched = ops.active.get(message.guild.id);
  let server_id = message.guild.id;
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('음성 채널에 연결되어 있지 않습니다.');
  let author_id = `<@!${message.author.id}>`;
sql =`SELECT * FROM server_user_permission WHERE server_id=${server_id} AND permission = 'setdj' AND user_id = '${author_id}'`;
    connection.query(sql,function(error, result, fields) {
          if (error) {
            console.log(error);
          }else{

            if (result == 0) {
              if (!(message.guild.ownerID == message.author.id)) {
                message.reply("입력하신 명령어의 권한이 없습니다. 서버 관리자에게 문의하세요.");
                console.log(`${message.guild.id} result: force skip fail`);
              }else{
                if (!fetched) return message.channel.send('음악이 재생되고 있지 않습니다.');
                ops.active.set(message.guild.id, fetched);
                  message.channel.send('스킵 완료!');
                  fetched.dispatcher.emit('end');
                }

              }else{
                if (!fetched) return message.channel.send('음악이 재생되고 있지 않습니다.');
                ops.active.set(message.guild.id, fetched);
                  message.channel.send('스킵 완료!');
                  fetched.dispatcher.emit('end');
              }
            }
          });

        } catch (e) {
            console.log(e);
          }
}
