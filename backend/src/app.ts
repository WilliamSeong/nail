import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

const server = express();
const port = 3000;

server.use(cors({
  origin: 'http://localhost:5173',
}));

server.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log("GET request received");
});

server.post('/api', (req, res) => {
  res.send("Goodbye, World!")
  req.on('data', (data) => {
    const { name, age } = JSON.parse(data.toString());
    console.log(name, age);
  });
  console.log('POST request received');
})

server.post('/send', async (req, res) => {

  const accessToken = await getAccessToken();

  req.on('data', (data) => {
    const { message } = JSON.parse(data.toString());
    console.log(message);

    send(message, accessToken);
  });
  console.log('POST request received');
  res.send("Message sent!")
})

server.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

dotenv.config();
const clientId = process.env.CLIENT_ID as string;
const clientSecret = process.env.CLIENT_SECRET as string;
const refreshToken = process.env.REFRESH_TOKEN as string;

async function getAccessToken() {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token'
    })
  });
  const token = await response.json();
  const accessToken = token.access_token;

  return accessToken;
}

async function send(message: string, accessToken: string) {
  console.log("Sending message: ", message);
  console.log("Access token: ", accessToken);

  // MIME message construction
  const messageParts = [
    'MIME-Version: 1.0',
    'From: "William Seong" <seongwilliam@gmail.com>',
    'To: <seongwilliam@gmail.com>',
    'Subject: Test Email',
    'Content-Type: text/plain; charset=UTF-8',
    '',
    message
  ].join('\r\n');
  // console.log("Message parts: ", messageParts);
  const encodedMessage = btoa(messageParts)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  // console.log("Encoded message: ", encodedMessage);

  // Send message
  const response = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      raw: encodedMessage
    })
  })

  if (response.ok) {
    console.log("Message sent successfully!");
  } else {
    console.error("Failed to send message!");
  }
}
