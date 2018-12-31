/*
@ Autor devstar1224
*/

exports.run = async (bot, message, args, ops, cmd, prefix, connection) => {

  let fetched = ops.active.get(message.guild.id);

  if (!fetched) return message.channel.send('대기열이 비어있습니다.');

  let queue = fetched.queue;

  let nowPlaying = queue[0];

  let resp = `__**현재 재생곡**__\n**${nowPlaying.songTitle}** -- **요청:** *${nowPlaying.requester}*\n\n__**예약 곡**__\n`;

  for (var i=1; i < queue.length; i++) {
    resp += `${i}. **${queue[i].songTitle}** -- **요청:** *${queue[i].requester}*\n`;
  }
  message.channel.send(resp);

}
