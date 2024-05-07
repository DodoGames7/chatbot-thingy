module.exports = [{
type: "interaction",
prototype: "button",
code: `$interactionUpdate[{newEmbed:{title:Other Projects}{field:Not So Serious:
* **Dodo-Bot v3**#COLON# Coming soon...
* **[Project Cupcakex](https#COLON#//github.com/DodoGames7/CupcakeX)**#COLON# A attempt to try non-aoi related stuff...
}{field:Projects:
* **[dodogames-api](https#COLON#//github.com/DodoGames7/dodogames-api)**#COLON# Simple api made in easy-api.ts! Nothing else interesting...
* **[Dodo-Bot](https#COLON#//github.com/DodoGames7/Dodo-Bot)**#COLON# A personal bot project made in aoi.js v6 aiming to both entertain and provide users some features to use.
}}{actionRow:{button:Home:2:infohomepage_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==otherprojects;]
`
},{
type: "interaction",
prototype: "button",
code: `$interactionUpdate[{newEmbed:{title:About Chatbot-thingy}{description:Chatbot-thingy is a Not-So-Serious project developed by $username[632607624742961153]! It is mostly an improved version of [being's chatbot](https#COLON#//replit.com/@beingyt1437/Discord-ChatBotv2?v=1) with stabilities and of course a functional chatbot! Nothing fancy about that.}{color:Purple}}{actionRow:{button:Other Projects:2:otherprojects_$authorID:false}}]


$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
{ephemeral}
{interaction}
]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==infohomepage;]

`
}]