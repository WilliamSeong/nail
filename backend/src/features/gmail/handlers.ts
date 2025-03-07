export const gmailHandlers = {
    getToken,
    send
}

async function getToken(req, res) {
    console.log('POST request received');
    req.on('data', (data) => {
      const { code } = JSON.parse(data.toString());
      console.log(code);
  
      getRefreshToken(code);
    });
  }

async function getRefreshToken(code : string) {
    await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            code: code,
            client_id: process.env.CLIENT_ID as string,
            client_secret: process.env.CLIENT_SECRET as string,
            redirect_uri: 'http://localhost:5173/contacta',
            grant_type: 'authorization_code'
        })
    })
    .then(response => response.json())
    .then(data => {const token = data.refresh_token; console.log(token);})
    .catch((error) => {console.error('Error:', error);
    });
}

// Sending message from frontend
async function send(req, res) {

    const accessToken = await getAccessToken();
    console.log("Got access token: ", accessToken)
  
    req.on('data', (data) => {
      const { name, email, message } = JSON.parse(data.toString());
      console.log(name, email, message);
  
      sendMessage(name, email, message, accessToken);
    });
    console.log('POST request received');
    res.send("Message sent!")
  }
  
  const clientId = process.env.GOOGLE_CLIENT_ID as string;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN as string;
  
  async function getAccessToken() {
    console.log("Calling getAccessTokeen");
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
    console.log("response is: ", response);
    const token = await response.json();
    const accessToken = token.access_token;
  
    return accessToken;
  }
  
  async function sendMessage(name: string ,email: string ,message: string, accessToken: string) {
    console.log("Sending message: ", message);
    console.log("Access token: ", accessToken);
    const time = new Date();
  
    // MIME message construction
    const messageParts = [
      'MIME-Version: 1.0',
      'From: "William Seong" <willerseong@gmail.com>',
      'To: <seongwilliam@gmail.com>',
      'Cc: <' + email + ">",
      'Subject:' + time,
      'Content-Type: text/plain; charset=UTF-8',
      '',
      `${name}\n${message}`
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
  