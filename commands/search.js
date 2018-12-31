/*
@ Autor devstar1224
*/

const search = require('yt-search');

exports.run = (bot, message, args, ops, cmd, prefix) => {
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
    description: resp,
    fields: [{
        name: "검색된 음악입니다.",
        value: `**__1번부터${videos.length}번중에 선택해주세요.__**`
      }],
      footer:{text: `c를 입력하시면 취소가 됩니다.`}
  }});
    const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0 || m.content == 'c' || (m.content.indexOf(prefix + 'p') > -1); // if you edit command 'p', U should edit here
    const collector = message.channel.createMessageCollector(filter, {max:1});

    collector.videos = videos;
    collector.on('collect', function(m){
    console.log(`${message.guild.id} result: select music finish`);
    if (m.content == 'c') {
      return message.channel.send({embed: { // when time out
      author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
      },
      color: 0x00ff3c,
      fields: [{
          name: "검색 취소",
          value: `취소가 정상적으로 되었습니다.`
            }],
        }});
    }else if (m.content.indexOf(prefix) > -1) {
        return; //if insert command previous command disable
    }else{
    let commandFile = require('./play.js');
    commandFile.run(bot, message,this.videos[parseInt(m.content)-1].url, ops, 1);
    }
    });
  });
}
