module.exports = {
    name: "$alwaysExecute",
    code: `
  $ifAwaited[$getGuildVar[embedmode]==on;{execute:chatbotembedmode};{execute:chatbottextmode}]
  $clientTyping
  $cooldown[2s;{newEmbed:{title:Hey}{description:Don't send messages to fast, you can break me by doing it!}{color:Red}}]

  $createObject[api;$nonEscape[$get[jsonresponse]]]
$onlyIf[$isValidObject[$nonEscape[$get[jsonresponse]]]==true;I'm unavailable at the moment, Please, try again later.]
$let[jsonresponse;$jsonRequest[https://tilki.dev/api/hercai?soru=$uri[$message;encode]]]
 $onlyIf[$checkContains[$message;@everyone;@here]==false;{newEmbed:{title:Hey}{description:I don't disturb people!}{color:#ff0000}}]
$onlyIf[$hasPermsInChannel[$getGuildVar[chatbotChannel];$clientID;sendmessages;viewchannel]==true;]
  $onlyIf[$guildChannelExists[$guildID;$getGuildVar[chatbotChannel]]==true;]
  $onlyIf[$channelID==$getGuildVar[chatbotChannel];]
  $onlyIf[$getGuildVar[chatbotChannel]!=;]

`

}
