module.exports = [
  {
    name: "set-chatbot",
    aliases: ["setchatbot", "chatbot", "chatbot-setup", "setupchatbot"],
    category: "Chatbot",
    description: "Sets chatbot of the server",
    code: `
$title[Channel Setup]
$description[Select a channel to set for the bot to reply into!
    
   **Current settings**
   **Channel:** $get[channel]

    Tip: Can't find the channel name you're looking for? Try typing the channel name into the menu instead!]
    $color[Yellow]
    $addSelectMenu[1;channel;chatbotmenu_$authorID;Open The menu.;1;1;false;Text]
    $cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;set-chatbot;$authorID];$dateStamp];1000]]:R>]


$let[channel;$advancedReplaceText[$checkCondition[$getGuildVar
[chatbotChannel]==];true;None;false;<#$getGuildVar
[chatbotChannel]> \`$getGuildVar
[chatbotChannel]\`]]
    $onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]

`,
  },
  {
    name: "reset-chatbot",
    aliases: "resetchatbot",
    category: "Chatbot",
    description: "Resets the chatbot in the server",
    code: `
   $description[Successfully reset the channel for chatbot in this server!]
   $color[Yellow]

   $setGuildVar[chatbotChannel;]
   $onlyIf[$getGuildVar[chatbotChannel]!=;{newEmbed:{title:Uh, Oh!}{description:This server has no chat bot channel!}{color:Red}}]

  $onlyPerms[managechannels;You do not have \`ManageChannels\` permission to use this.]
`,
  },
];
