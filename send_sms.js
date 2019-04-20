require('dotenv').config()
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const numbers = [+17859792135, +18015565442];
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
// console.log(process.env.TWILIO_ACCOUNT_SID);
// console.log(process.env.TWILIO_AUTH_TOKEN);
// twilio.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: process.env.TWILIO_NUMBER,
//      to: numbers
// //   to: process.env.OUTGOING_NUMBERS
//    })
//   .then(message => console.log(message.sid));

//   console.log(numbers)

  Promise.all(
    numbers.map(numbers => {
      return twilio.messages.create({
        to: numbers,
        from: process.env.TWILIO_MESSAGING_SERVICE_SID,
        body: 'Hey EVERYBODY!  TWILIO HERE!'
      });
    })
  )
    .then(messages => {
      console.log('Messages sent!');
    })
    .catch(err => console.error(err));