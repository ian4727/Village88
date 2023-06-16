const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
const bodyParser = require('body-parser');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const app = express();

// Parse incoming request bodies in a middleware before handlers
app.use(bodyParser.json());

//blocks browser from restricting data
app.use(cors());

//Testing server
app.get('/', (req, res) => {
  res.send("Server is working!")
})

//Twilio text
app.post('/send-text', (req, res) => {
  // Destructure recipient and message from the request body
  const {recipient, message} = req.body;

  // Use the Twilio client to send the message
  client.messages.create({
    body: message,
    to: recipient,
    from: '+16073885840',
  }).then((message) => console.log(message.sid));
  res.send('Message sent successfully!');
})

app.listen(2323, () => {
  console.log('Server is listening on port 2323');
});


