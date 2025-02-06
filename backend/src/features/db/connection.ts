import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv'
dotenv.config();

const mongodbUser = process.env.MONGODB_USER as string;
const mongodbPassword = process.env.MONGODB_PASSWORD as string;
const uri = `mongodb+srv://${mongodbUser}:${mongodbPassword}@young-by-nail.vhysf.mongodb.net/?retryWrites=true&w=majority&appName=young-by-nail`;

// console.log(uri);

let client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectDB(){
    try{
        await client.connect();
        return client;
    }catch(e){
        console.log("MongoDB connection error:", e);
    }
}

export async function getClient(){
  if (!client) {
    client = await connectDB();
  }
  return client;
};

export async function closeDB() {
    await client.close()
    client = null;
} 