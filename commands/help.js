

exports.run = async (bot, message, args, ops, command_array, prefix) => {
  var resp = '';
  var marge = '';
  for (var i = 0; i < command_array.length; i++) {
    marge_highlight = prefix + command_array[i].command + " " + command_array[i].howto
    marge_help = " - " + command_array[i].help
      resp += (`\`${marge_highlight}\` ${marge_help} \n\n`);
  }
  message.channel.send({embed: {
    author: {
    name: bot.user.username,
    icon_url: bot.user.avatarURL
    },
  color: 3447003,
  description: resp,
  fields: [{
     name: "기부",
     value: "AWS같은 클라우드 서버를 사용하고 싶어요... [개발자에게 기부하러가기](https://www.paypal.me/popconbot)"
   },
   {
      name: "팝콘 디스코드 서버",
      value: "들어오셔서 궁금한거나 개발자에게 물어보고 싶은거 말하면 돼요![서버 참가](https://discordapp.com/invite/PfMy4yh)"
    }],
  footer:{
    icon_url: bot.user.avatarURL,
    text: `Email : master@cysv.iptime.org || dev_sang@naver.com`
  }
}});
}
