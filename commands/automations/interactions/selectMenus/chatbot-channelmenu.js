module.exports = [{
  type: "interaction",
  prototype: "selectMenu",
  code: `
  
  $interactionReply[<#$getSelectMenuValues[all]> has been set as the chatbot channel!;all;true]

  $setGuildVar[chatbotChannel;$getSelectMenuValues[all]]
  $onlyIf[$hasPermsInChannel[$getSelectMenuValues[all];$clientID;sendmessages;viewchannel]==true;Hmm. Seems like i don't have the right permissions there. Please ensure that i have the following permissions for the channel <#$getSelectMenuValues[all]>:
  \`ViewChannel\`
  \`SendMessages\`
  {ephemeral}
  {interaction}
  ]

  $onlyIf[$getSelectMenuValues[all]!=$getGuildVar[chatbotChannel];
  This channel is already used for Chatbot messaging. Please, set a different channel instead.
  {ephemeral}
  {interaction}
  ]

  $onlyIf[$channelType[$getSelectMenuValues[all]]==text;We only support Text Channels for now.
  Make sure to set an Text channel instead.
  {ephemeral}
  {interaction}
  ]

  $onlyIf[$guildChannelExists[$guildID;$getSelectMenuValues[all]]==true;The channel you chose no longer exists in this server.
  Please set a valid channel which exists inside this server.
  {ephemeral}
  {interaction}
  ]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==chatbotmenu;]
  `
}]