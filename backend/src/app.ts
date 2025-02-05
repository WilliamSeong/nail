import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Server Start Up

const server = express();
const port = 3000;
dotenv.config();

server.use(cors({
  origin: 'http://localhost:5173',
}));

const mongodbUser = process.env.MONGODB_USER as string;
const mongodbPassword = process.env.MONGODB_PASSWORD as string;
const uri = `mongodb+srv://${mongodbUser}:${mongodbPassword}@young-by-nail.vhysf.mongodb.net/?retryWrites=true&w=majority&appName=young-by-nail`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function serverStart() {
  try{
    await client.connect();
    console.log('MongoDB connected')

    server.listen(port);
    console.log(`Express Server is listening at http://localhost:${port}`);
  }catch(e){
    console.log("Server Start Error:", e);
  }
}

serverStart()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Database Interactions

// Insert
server.get('/insert', async (req, res) => {
  console.log("Mongo insert request received");
  const newListing = {
    "name" : "William Seong",
    "email" : "seongwilliam@gmail.com",
    "movie_id" : new ObjectId('573a1390f29313caabcd42e8'),
    "text" : "Testing an insert one for the comment collection in the sample_mflix database",
    "date" : new Date()
  }
  try{
    const result = await createListing(client, newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
  } catch(e) {
    console.log("Insert error: ", e);
  }
})

async function createListing(client, newListing){
  return await client.db("sample_mflix").collection("comments").insertOne(newListing);
}

// Read
server.get('/read', async (req, res) => {
  console.log("Mongo read request received");
  const name = "William Seong";
  try{
    const result = await readListing(client, name)
    console.log(`Found a listing in the collection with the name '${result}':`);
    console.log(result);
  } catch(e) {
    console.log("Read error: ", e);
  }
})

async function readListing(client, nameOfListing) {
  const result = await client.db("sample_mflix").collection("comments").findOne({ name : nameOfListing })
  
  if (result) {
    return result;
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

// Read Many
server.get('/read/many', async (req, res) => {
  console.log("Mongo read request received");
  const minimumRuntime = 120;
  try{
    const results = await readManyListing(client, minimumRuntime)
    console.log(`Found a listing in the collection with a minimum runtime of '${minimumRuntime}':`);
    console.log(results);
    
    if (results.length > 0) {
      console.log(`Found listing(s) with runtime at least ${minimumRuntime}`);
      results.forEach((result, i) => {
          console.log();
          console.log(`${i + 1}. name: ${result.title}`);
          console.log(`   _id: ${result._id}`);
          console.log(`   runtime: ${result.runtime}`);
          console.log(`   lastupdated: ${new Date(result.lastupdated).toDateString()}`);
          console.log(`   fullplot: ${result.fullplot}`);
      });
    } else {
        console.log(`No listings found with runtime at least ${minimumRuntime}`);
    }
  } catch(e) {
    console.log("Read error: ", e);
  }
})

async function readManyListing(client, minimumRuntime) {
  const cursor = await client.db("sample_mflix").collection("movies").find({ runtime : { $gte : minimumRuntime }}).limit(5);
  const result = await cursor.toArray();
  
  if (result === 0) {
    return result;
  } else {
    console.log(`No listings found with the minimum runtime of '${minimumRuntime}'`);
  }
}

// Update
server.get('/update', async (req, res) => {
  console.log("Updating document");
  try{
    const results = await updateListing(client, "John Kim", { name : "William Seong" })
    console.log(`${results.matchedCount} document(s) matched the query criteria.`);
    console.log(`${results.modifiedCount} document(s) was/were updated.`);
  } catch (e) {
    console.log("Error: ", e);
  }
})

async function updateListing(client, update, updated) {
  return await client.db("sample_mflix").collection("comments").updateOne({ name : update }, { $set : updated });
}

// Upsert (Update if it exist, Insert if not)
server.get('/upsert', async (req, res) => {
  console.log("Upserting document");
  try{
    const results = await upsertListing(client, "John Kim", { name : "William Seong" })
    console.log(`${results.matchedCount} document(s) matched the query criteria.`);
    console.log(`${results.modifiedCount} document(s) was/were updated.`);
  } catch (e) {
    console.log("Error: ", e);
  }
})

async function upsertListing(client, update, updated) {
  const result = await client.db("sample_mflix").collection("comments").updateOne({ name : update }, { $set : updated }, { upsert: true });
  if (result.upsertedCount > 0) {
    // console.log("full result", result)
    // full result {
    //   acknowledged: true,
    //   modifiedCount: 0,
    //   upsertedId: new ObjectId('67a3d6e6ce945cb5bef1a7a0'),
    //   upsertedCount: 1,
    //   matchedCount: 0
    // }
    console.log(`One document was inserted with the id ${result.upsertedId}`);
  } else {
      console.log(`${result.modifiedCount} document(s) was/were updated.`);
  }
  return result;
}

// Update Many
server.get('/update/many', async (req, res) => {
  try {
    const results = await updateMany(client, "William Seong", { email : "willerseong@gmail.com" });
    console.log(`${results.matchedCount} document(s) matched the query criteria.`);
    console.log(`${results.modifiedCount} document(s) was/were updated.`);
  } catch(e) {
    console.log("Error: ", e);
  }
})

async function updateMany(client, update, updated) {
  return await client.db("sample_mflix").collection("comments").updateMany({ name : update}, { $set : updated })
}

// Delete
server.get('/delete', async (req, res) => {
  try {
    const result = await deleteListing(client, "William Seong");
    // console.log("All result: ", result);
    // All result:  { acknowledged: true, deletedCount: 1 }
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
  } catch(e) {
    console.log("Error: ", e);
  }
})

async function deleteListing(client, nameOfListing) {
  return await client.db("sample_mflix").collection("comments").deleteOne({ name : nameOfListing });
}

// Delete Many
server.get('/delete/many', async (req, res) => {
  try {
    const results = await deleteMany(client, "William Seong");
    console.log(`${results.deletedCount} document(s) was/were deleted.`);
  } catch(e) {
    console.log("Error: ", e);
  }
})

async function deleteMany(client, nameOfListings) {
  return client.db("sample_mflix").collection("comments").deleteMany({ name : nameOfListings })
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Authorization

// Getting RefreshToken just in case
server.post('/token', async (req, res) => {
  console.log('POST request received');
  req.on('data', (data) => {
    const { code } = JSON.parse(data.toString());
    console.log(code);

    getRefreshToken(code);

  });
})

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sending message from frontend
server.post('/send', async (req, res) => {

  const accessToken = await getAccessToken();
  console.log("Got access token: ", accessToken)

  req.on('data', (data) => {
    const { name, email, message } = JSON.parse(data.toString());
    console.log(name, email, message);

    send(name, email, message, accessToken);
  });
  console.log('POST request received');
  res.send("Message sent!")
})

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

async function send(name: string ,email: string ,message: string, accessToken: string) {
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Server close

async function cleanUp() {
  console.log("Clean Up Protocol")

  await client.close();
  console.log("Mongo DB disconnected");

  console.log("Clean Up Complete")
}

// Server Close
server.on('close', async () => {
  await cleanUp();
  process.exit(0);
});

// Server Terminate
process.on('SIGINT', async () => {
  await cleanUp();
  process.exit(0);
});

// Server Terminate
process.on('SIGTERM', async () => {
  await cleanUp();
  process.exit(0);
});
