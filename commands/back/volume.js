/*
@ Autor devstar1224
*/

exports.run = (bot, message, args, ops) => {

  // if set other permission, reference to (https://discordapp.com/developers/docs/topics/permissions)
  // input rear r=>["roles"] input roles name at [roules]
  if (!(message.member.permissions.has("ADMINISTRATOR") || message.member.roles.some(r=>["DJ", "volume"].includes(r.name))) ) {
         return message.reply("입력하신 명령어의 권한이 없습니다. 서버 관리자에게 문의하세요.");
  }


  let fetched = ops.active.get(message.guild.id);

  if (!fetched) return message.channel.send('현재 음악이 재생되고 있지 않습니다.');

  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('음성 채널에 연결되어 있지 않습니다.');

  if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('0 에서 200 사이의 숫자를 입력하세요.');

  fetched.dispatcher.setVolume(args[0]/100);

  message.channel.send(`볼륨을 ${args[0]} 으로 설정합니다.`)
}
