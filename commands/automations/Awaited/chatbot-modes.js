module.exports = [{
    name: "chatbottextmode",
    type: "awaited",
    code: `$getObjectProperty[api;cevap]

    $reply[$messageID;$get[replyping]]
    $let[replyping;$advancedReplaceText[$getGuildVar[replyping];off;false;on;true]]`
},{
    name: "chatbotembedmode",
    type: "awaited",
    code: `
    $title[Chatbot]
    $description[$getObjectProperty[api;cevap]]

    $reply[$messageID;$get[replyping]]
    $let[replyping;$advancedReplaceText[$getGuildVar[replyping];off;false;on;true]]
    `
}]
