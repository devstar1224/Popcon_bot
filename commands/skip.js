/*
@ Autor devstar1224
*/

exports.run = async (bot, message, args, ops, cmd, prefix, connection) => {
  let fetched = ops.active.get(message.guild.id);
  if (!fetched) return message.channel.send('음악이 재생되고 있지 않습니다.');

  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('음성 채널에 연결되어 있지 않습니다.');

  let userCount = message.member.voiceChannel.members.size;

  let required = Math.ceil(userCount/2);

  if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

  if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`이미 스킵 투표를 하셧습니다.. ${fetched.queue[0].voteSkips.length}/${required} 필요`);

  fetched.queue[0].voteSkips.push(message.member.id);

  ops.active.set(message.guild.id, fetched);

  if (fetched.queue[0].voteSkips.length >= required) {
    message.channel.send('스킵 완료!');
    return fetched.dispatcher.emit('end');
  }

  message.channel.send(`skip 투표완료.${fetched.queue[0].voteSkips.length}/${required} 스킵에 필요합니다. `)

}
