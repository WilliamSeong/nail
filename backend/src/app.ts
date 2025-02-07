import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import { connectDB, closeDB } from './features/db/connection';
import dbTestRoutes from "./features/db/db-test/routes";
import dbDevRoutes from "./features/db/db-dev/routes";

import gmailRoutes from "./features/gmail/routes"




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Server Start Up

const server = express();
const port = 3000;
dotenv.config();
server.use(express.json());


server.use(cors({
  origin: 'http://localhost:5173',
}));

async function serverStart() {
  try{
    await connectDB();
    console.log('MongoDB connected')

    server.listen(port);
    console.log(`Express Server is listening at http://localhost:${port}`);
  }catch(e){
    console.log("Server Start Error:", e);
  }
}

serverStart()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Database Abstraction

server.use('/db', dbTestRoutes);
server.use('/dev', dbDevRoutes);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Gmail Abstraction

server.use('/contact', gmailRoutes)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Server close

async function cleanUp() {
  console.log("Clean Up Protocol")

  await closeDB();
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
