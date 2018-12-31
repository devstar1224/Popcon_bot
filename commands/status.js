/*
@ Autor devstar1224
*/
var fs = require('fs');

exports.run = async (bot, message, args, ops, cmd, prefix, connection) => {
try {

  if(ops.ownerID == message.author.id){
let text ='';
    for (var i = 0; i < args.length; i++) {
      text += args[i] + ' ';
    }

  let sql =`SELECT activity FROM server_public_settings`;
      connection.query(sql,function(error, result, fields) {
            if (error) {
              console.log(error);
            }else{

              if (result == 0) {
                sql =`INSERT INTO server_public_settings(activity) VALUES ('${text}');`;
                connection.query(sql,function(error, result, fields) {
                  if (error) {
                    console.log(error);
                  }

                });
              }else {
                  sql =`UPDATE server_public_settings SET activity='${text}';`;
                  connection.query(sql,function(error, result, fields) {
                  if (error) {
                    console.log(error);
                  }
                });
              }
                  bot.user.setActivity(text);
            }
          });
        }
      } catch (e) {
        console.log(e);
      }
}
