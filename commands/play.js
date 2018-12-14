/*
@ Autor devstar1224
*/
const ytdl = require('ytdl-core');

exports.run = async (bot, message, args, ops, cmd) => {

    if (!message.member.voiceChannel) return message.channel.send('음성 채널에 접속해주세요.');

    if (!args[0]) return message.channel.send('주소 또는 곡명을 입력해주세요.');

    //check youtube.url
    let validate = args.indexOf("/watch?v=");

    // IF YOU REMOVE DEBUGING URL
    // message.channel.send(args + '|' + validate);

    if (!(validate != -1)) {
      let commandFile = require('./search.js');
      return commandFile.run(bot, message, args, ops);
    }

    // youtube url + video ID
    args = "https://www.youtube.com" + args;
    let info = await  ytdl.getInfo(args);

   let data = ops.active.get(message.guild.id) || {};
    if (!data.connection) data.connection = await message.member.voiceChannel.join();
    if(!data.queue) data.queue = [];
    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.title,
        requester: message.author.tag,
        url: args,
        announceChannel: message.channel.id
    });

    if (!data.dispatcher) play(bot, ops, data);
    else {
        message.channel.send(`대기열추가 : ${info.title} | 요청 : ${message.author.id}`)
    }
    ops.active.set(message.guild.id, data);

    // it is commit from to json file .. AUTO SETTING VOLUME
    let commandFile = require('./volume.js');
    commandFile.run(bot, message, args, ops, 0);
}

async function play(bot, ops, data){
    bot.channels.get(data.queue[0].announceChannel).send(`현재 재생곡: ${data.queue[0].songTitle} | 요청 : ${data.queue[0].requester}`);

    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, {filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;
    data.dispatcher.once('end', function() {
            end(bot, ops, this);
        });
}
function end(bot, ops, dispatcher){

    let fetched = ops.active.get(dispatcher.guildID);

    fetched.queue.shift();

    if (fetched.queue.length > 0) {
        ops.active.set(dispatcher.guildID, fetched);
        play(bot, ops, fetched);
    } else {
        ops.active.delete(dispatcher.guildID);

        let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel;

        if (vc) vc.leave();

    }

}
