module.exports = {
name: "info",
code: `$title[About Chatbot-thingy]
$description[Chatbot-thingy is a Not-So-Serious project developed by $username[632607624742961153]! It is mostly an improved version of [being's chatbot](https://replit.com/@beingyt1437/Discord-ChatBotv2?v=1) with stabilities and of course a functional chatbot! Nothing fancy about that.]
$color[Purple]
$addButton[1;Other Projects;2;otherprojects_$authorID;false]
$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;info;$authorID];$dateStamp];1000]]:R>]
`
}