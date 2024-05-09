module.exports = [{
    name: "Startup message",
    type: "ready",
    channel: "",
    code: `$log[Chatbot is ready to be used!]
    $ifAwaited[$getVar[pre_release_mode]==on;{execute:senddevwarning}]`
},{
    name: "senddevwarning",
    type: "awaited",
    code: `$djsEval[const chalk = require('chalk')

console.log(chalk.red("Development build has been detected!\\nUsing Development builds are not recommended for public usage as they may contain bugs and such. It is advised to try them for testing purposes only!"))]`
}]