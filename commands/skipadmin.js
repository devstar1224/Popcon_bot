/*
@ Autor devstar1224
*/
var mysql = require('mysql')

var connection = mysql.createConnection({
    host : "localhost",
    port :  ,
    user : " ",
    password : " ",
    database : " "
})
connection.connect();

exports.run = async (bot, message, args, ops, cmd, prefix) => { //careful the code is mess
  try {
  console.log('command : fs'); //status users log
  let fetched = ops.active.get(message.guild.id);
  message.delete();
  let server_id = message.guild.id;
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('음성 채널에 연결되어 있지 않습니다.');

sql =`SELECT * FROM server_user_permission WHERE server_id=${server_id} AND permission = 'setdj' AND user_id = '${message.author.id}'`;
    connection.query(sql,function(error, result, fields) {
          if (error) {
            console.log(error);
          }else{

            if (result == 0) {
              if (!(message.guild.ownerID == message.author.id)) {
                return message.reply("입력하신 명령어의 권한이 없습니다. 서버 관리자에게 문의하세요.");

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
