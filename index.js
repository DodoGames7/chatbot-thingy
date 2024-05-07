const { AoiClient } = require("aoi.js");
const config = require("./config.json");

const client = new AoiClient({
    token: process.env.Token || config.BotToken,
    prefix: "$getGuildVar[prefix]",
    mobilePlatform: config.MobileStatus,
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    },
  aoiLogs: false, // Don't show aoi.js default console message
  aoiWarning: false, // Disable aoi.js update warning
});



// Handlers
client.loadCommands("./commands/", false)
client.variables(require("./handler/variables.js"));



