module.exports = {
  name: "ping",
  code: `
   Pong! 🏓
   $editIn[3s;Api Latency: $pingms
   Message Ping: $messagePingms
   Last restart: <t:$truncate[$divide[$readyTimeStamp;1000]]:R>
   ]
`,
};
