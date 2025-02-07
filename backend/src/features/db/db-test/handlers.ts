import { ObjectId } from "mongodb";
import { getClient } from "../connection";

// Database Interactions

export const dbHandlers = {
    dbInsert,
    dbRead,
    dbReadMany,
    dbUpdate,
    dbUpsert,
    dbUpdateMany,
    dbDelete,
    dbDeleteMany
   };
   

// Insert
async function dbInsert(req, res) {
  console.log("Mongo insert request received");
  const newListing = {
    "name" : "William Seong",
    "email" : "seongwilliam@gmail.com",
    "movie_id" : new ObjectId('573a1390f29313caabcd42e8'),
    "text" : "Testing an insert one for the comment collection in the sample_mflix database",
    "date" : new Date()
  };
    try{
        const client = await getClient();
        const result = await createListing(client, newListing);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    } catch(e) {
        console.log("Insert error: ", e);
    }
}

async function createListing(client, newListing){
    return await client.db("sample_mflix").collection("comments").insertOne(newListing);
}

// Read
async function dbRead(req, res) {
    console.log("Mongo read request received");
    const name = "William Seong";
    try{
        const client = await getClient();
        const result = await readListing(client, name)
        console.log(`Found a listing in the collection with the name '${result}':`);
        console.log(result);
    } catch(e) {
        console.log("Read error: ", e);
    }
}
  
async function readListing(client, nameOfListing) {
    const result = await client.db("sample_mflix").collection("comments").findOne({ name : nameOfListing })

    if (result) {
        return result;
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

// Read Many
async function dbReadMany(req, res) {
    console.log("Mongo read request received");
    const minimumRuntime = 120;
    try{
        const client = await getClient();
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
}

async function readManyListing(client, minimumRuntime) {
    const cursor = await client.db("sample_mflix").collection("movies").find({ runtime : { $gte : minimumRuntime }}).limit(5);
    const result = await cursor.toArray();

    if (result != 0) {
        return result;
    } else {
        console.log(`No listings found with the minimum runtime of '${minimumRuntime}'`);
    }
}

// Update
async function dbUpdate(req, res) {
    console.log("Updating document");
    try{
        const client = await getClient();
        const results = await updateListing(client, "John Kim", { name : "William Seong" })
        console.log(`${results.matchedCount} document(s) matched the query criteria.`);
        console.log(`${results.modifiedCount} document(s) was/were updated.`);
    } catch (e) {
        console.log("Error: ", e);
    }
}

async function updateListing(client, update, updated) {
    return await client.db("sample_mflix").collection("comments").updateOne({ name : update }, { $set : updated });
}

// Upsert (Update if it exist, Insert if not)
async function dbUpsert(req, res) {
    console.log("Upserting document");
    try{
        const client = await getClient();
        const results = await upsertListing(client, "John Kim", { name : "William Seong" })
        console.log(`${results.matchedCount} document(s) matched the query criteria.`);
        console.log(`${results.modifiedCount} document(s) was/were updated.`);
    } catch (e) {
        console.log("Error: ", e);
    }
}

async function upsertListing(client, update, updated) {
    const result = await client.db("sample_mflix").collection("comments").updateOne({ name : update }, { $set : updated }, { upsert : true });
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
async function dbUpdateMany(req, res) {
    try {
        const client = await getClient();
        const results = await updateMany(client, "William Seong", { email : "willerseong@gmail.com" });
        console.log(`${results.matchedCount} document(s) matched the query criteria.`);
        console.log(`${results.modifiedCount} document(s) was/were updated.`);
    } catch(e) {
        console.log("Error: ", e);
    }
}

async function updateMany(client, update, updated) {
    return await client.db("sample_mflix").collection("comments").updateMany({ name : update}, { $set : updated })
}

// Delete
async function dbDelete(req, res){
    try {
        const client = await getClient();
        const result = await deleteListing(client, "William Seong");
        // console.log("All result: ", result);
        // All result:  { acknowledged: true, deletedCount: 1 }
        console.log(`${result.deletedCount} document(s) was/were deleted.`);
    } catch(e) {
        console.log("Error: ", e);
    }
}

async function deleteListing(client, nameOfListing) {
    return await client.db("sample_mflix").collection("comments").deleteOne({ name : nameOfListing });
}

// Delete Many
async function dbDeleteMany(req, res){
    try {
        const client = await getClient();
        const results = await deleteMany(client, "William Seong");
        console.log(`${results.deletedCount} document(s) was/were deleted.`);
    } catch(e) {
        console.log("Error: ", e);
    }
}

async function deleteMany(client, nameOfListings) {
    return client.db("sample_mflix").collection("comments").deleteMany({ name : nameOfListings })
}