//File created by Mohammad Nayan and fully coded by Nayan

const axios = require('axios');

module.exports = {
  config: {
    name: "baby",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "...",
    prefix: 'awto',
    category: "talk",
    usages: "hi",
    cooldowns: 5,
  },

  handleReply: async function ({ api, event, handleReply }) {
    try {
      const response = await axios.get(`http://37.27.114.136:25472/sim?type=ask&ask=${encodeURIComponent(event.body)}`);
      console.log(response.data);
      const result = response.data.data.msg;


      api.sendMessage(result, event.threadID, (error, info) => {
        if (error) {
          console.error('Error replying to user:', error);
          return api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
        }
        global.client.handleReply.push({
          type: 'reply',
          name: this.config.name,
          messageID: info.messageID,
          author: event.senderID,
          head: event.body
        });
      }, event.messageID);

    } catch (error) {
      console.error('Error in handleReply:', error);
      api.sendMessage('An error occurred while processing your request. Please try again later.', event.threadID, event.messageID);
    }
  },



  start: async function ({ nayan, events, args, Users }) {
    try {
      const msg = args.join(" ");
      if (!msg) {
        var tl = ["hea baby_//-🫦😻","bØlo gøø jan amr _//-😘","
