require('dotenv').config()
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
console.log(process.env.TWILIO_ACCOUNT_SID);
console.log(process.env.TWILIO_AUTH_TOKEN);
client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: process.env.TWILIO_NUMBER,
     to: process.env.OUTGOING_NUMBERS
   })
  .then(message => console.log(message.sid));

