/*
@ Autor devstar1224
*/

exports.run = async (bot, message, args, ops, cmd, prefix, connection) => {
  try {

let server_id = message.guild.id;

let sql =`SELECT permission FROM server_user_permission WHERE server_id=${server_id} AND permission = 'setdj' AND user_id = '${args[0]}';`;
if (message.guild.ownerID == message.author.id) {
    connection.query(sql,function(error, result, fields) {
          if (error) {
            console.log(error);
          }else{
              if (result == 0) {
                sql =`INSERT INTO server_user_permission(server_id, user_id, permission) VALUES ('${server_id}', '${args[0]}', 'setdj');`;
                connection.query(sql,function(error, result, fields) {
                  if (error) {
                    console.log(error);
                  }else{
                    message.reply(`사용자 ID**${args[0]}**를 DJ로 지정하였습니다.`);
                  }
                });
              }else {
                message.reply('이미 DJ로 등록되어 있는 사용자 입니다.');
              }
            }
        });

  }else{
      message.reply('서버 관리자만 사용할 수 있는 명령어 입니다. 관리자에게 문의해주세요.');
  }

} catch (e) {
console.log(e);
}
}
