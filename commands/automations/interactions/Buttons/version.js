module.exports = [{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[{newEmbed:{title:Changes}{description:
* Add development warning on startup if pre-release mode is enabled
  }{color:Purple}}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:true}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionchanges;]
`
  },{
  type: "interaction",
  prototype: "button",
  code: `
  $interactionUpdate[{newEmbed:{title:Bug Fixes}{description:
*There're no changes currently in this category* 
  }{color:Purple}}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:true}{button:Other:2:versionother_$authorID:false}}]

  $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
 {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionbugfixes;]
`
  },{
    type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[{newEmbed:{title:Other}{description:
*There're no changes in this category*
}{color:Purple}}{actionRow:{button:Home:2:homebutton_$authorID:false:🏠}{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==versionother;]


    `

  },{
    type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[{newEmbed:{title:Chatbot-thingy version}{description:
* **Version**: $getVar[version]
* **Release type**: $getVar[release_type]
* **Build created on**: <t:$truncate[$divide[$getVar[buildDate];1000]]:f>
}{color:Purple}$nonEscape[$get[devbuild]]}{actionRow:{button:Changes:2:versionchanges_$authorID:false}{button:Bug Fixes:2:versionbugfixes_$authorID:false}{button:Other:2:versionother_$authorID:false}}]

$let[devbuild;$if[$getVar[pre_release_mode]==on;{footer:For testing purposes only.:https#COLON#//us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/mingcute--warning-fill.png}]]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==homebutton;]


    `

  }]
