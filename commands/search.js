/*
@ Autor devstar1224
*/

const search = require('yt-search');

exports.run = (bot, message, args, ops, cmd) => {
  console.log(args);
  search(`${args}`, function(err, res) {

    if (err) return message.channel.send('오류발생.');
    let videos = res.videos.slice(0, 10);
    let resp = '';
    for (var i in videos) {
      resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
    }
    message.channel.send({embed: {
    author: {
    name: bot.user.username,
    icon_url: bot.user.avatarURL
    },
    color: 3447003,
    fields: [{
        name: "검색된 음악입니다.",
        value: `1번부터${videos.length}번중에 선택해주세요.`
      }],
    description: resp
  }});

    const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
    const collector = message.channel.createMessageCollector(filter);
    collector.videos = videos;
    collector.once('collect', function(m){
    let commandFile = require('./play.js');
    commandFile.run(bot, message,this.videos[parseInt(m.content)-1].url, ops, 1);
    });
  });
}
