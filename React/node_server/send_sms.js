// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC714f4282ac955a5c8a1f403bb195daee';
const authToken = 'a69ff76b0227876c918616f608969c31';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Cramming na bakla',
     from: '+16073885840',
     to: '+639052136086'
   })
  .then(message => console.log(message.sid));
