module.exports = {
  name: "help",
  code: `$title[Help]
  $description[List of commands available to use:

**ver**
View the current version of the chatbot

**info**
Information about the chatbot project

**set-chatbot** 
Sets the chatbot channel.

**reset-chatbot**
Resets the chatbot channel.

**ping**
Returns the current ping of the bot
  ]
  $color[Purple]
  $cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;help;$authorID];$dateStamp];1000]]:R>]`
}