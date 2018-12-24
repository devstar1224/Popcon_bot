/*
@ Autor devstar1224
*/

exports.run = async (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  message.delete();

  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('음성 채널에 연결되어 있지 않습니다.');

  // if set other permission, reference to (https://discordapp.com/developers/docs/topics/permissions)
  // input rear r=>["roles"] input roles name at [roules]
  if (!(message.member.permissions.has("ADMINISTRATOR") || message.member.roles.some(r=>["DJ", "skipadmin"].includes(r.name))) ) {
         return message.reply("입력하신 명령어의 권한이 없습니다. 서버 관리자에게 문의하세요.");
}

  if (!fetched) return message.channel.send('음악이 재생되고 있지 않습니다.');

  ops.active.set(message.guild.id, fetched);
    message.channel.send('스킵 완료!');
    fetched.dispatcher.emit('end');
}
