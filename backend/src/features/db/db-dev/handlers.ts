import { ObjectId } from "mongodb";
import { getClient } from "../connection";

export const dbHandlers = {
    employeeAddHandler,
    employeeSearchHandler,
    reservationCreateHandler,
    availableReservationSearchHandler,
    reservationSearchHandler,
    reservationSearchHandler2
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add Employee
async function employeeAddHandler(req, res){

    const { employeeName, employeeRole, employeeEmail, employeePhone} = req.body;

    const employeeInfo = {
        "name" : employeeName,
        "email" : employeeEmail,
        "phone" : employeePhone,
        "role" : employeeRole
      };

    try{
            const client = await getClient();
            const result = await addEmployee(client, employeeName, employeePhone, employeeInfo);
            if (result.matchedCount = 1){
                console.log(`Employee Information Updated`);
            } else {
                console.log(`New employee created with the following id: ${result.upsertedId}`);
            }
        } catch(e) {
            console.log("Insert error: ", e);
        }
}

async function addEmployee(client, updateName, updatePhone, employeeInfo) {
    return client.db("nail_by_young_db").collection("employee").updateOne({ name : updateName, phone : updatePhone }, { $set: employeeInfo }, { upsert : true});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Employee

async function employeeSearchHandler(req, res){
    const { employeeSearch } = req.body;
    console.log("Employee Search initiated: ", employeeSearch);

    try {
        const client = await getClient();
        const results = await searchEmployee(client, employeeSearch);

        // console.log(results);
        
        res.json(results);
    } catch(e) {
        console.log("Search error: ", e);
        res.status(500).json({ error: "Search failed" });
    }
}

async function searchEmployee(client, search : string) {

    const cursor = await client.db("nail_by_young_db").collection("employee").find({
        $or: [
            { name: { $regex: search, $options: "i" }},
            { email: { $regex: search, $options: "i" }},
            { phone: { $regex: search, $options: "i" }},
            { role: { $regex: search, $options: "i" }}
        ]
    });
 
    try {
        const idSearch = await client.db("nail_by_young_db").collection("employee").findOne({ _id: new ObjectId(search) });
        if (idSearch) return idSearch;
    } catch {}
 
    return cursor.toArray();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Make Reservation

async function reservationCreateHandler(req, res) {
    const { reservationName, reservationContact, reservationDate, reservationTime, reservationNotes } = req.body;

    const reservationDetails = {
        name : reservationName,
        contact : reservationContact,
        date : reservationDate,
        time : reservationTime,
        status : "confirmed",
        notes : reservationNotes,
    }

    try {
        const client = await getClient();
        const result = await createReservation(client, reservationDetails);
        console.log("Reservation Created");
        res.json(result);
    } catch (e) {
        console.log("Reservation create error: ", e);
        res.status(500).json({ error: "Reservation failed" });
    }
}

async function createReservation(client, reservationDetails){
    return client.db("nail_by_young_db").collection("reservations").insertOne(reservationDetails);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Available Reservation Dates

async function availableReservationSearchHandler(req, res) {
    const { reservationSearch } = req.body;

    try {
        const client = await getClient();
        const result = await searchForReservationTimes(client, reservationSearch);
        // console.log(result);
        res.json(result);
    } catch (e) {
        console.log("Reservation create error: ", e);
        res.status(500).json({ error: "Reservation failed" });
    }
}

async function searchForReservationTimes(client, reservationSearch : string){
    const cursor = client.db("nail_by_young_db").collection("reservations").find({ date : reservationSearch }).project({ time : 1, _id : 0 });

    try {
        const idSearch = await client.db("nail_by_young_db").collection("reservations").findOne({ _id: new ObjectId(reservationSearch) }).project({ time : 1, _id : 0 });
        if (idSearch) return idSearch;
    } catch {}

    return cursor.toArray();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Reservation with ID

async function reservationSearchHandler(req, res) {
    const { reservationSearch } = req.body;

    try {
        const client = await getClient();
        console.log("Searching for reservation: ", reservationSearch);
        const result = await searchForReservation(client, reservationSearch);
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log("Reservation search error: ", e);
        res.status(500).json({ error: "Reservation Search failed" });
    }
}

async function searchForReservation(client, reservationSearch : string){
    const cursor = client.db("nail_by_young_db").collection("reservations").findOne({ _id : new ObjectId(reservationSearch) });
    return cursor;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Reservation

async function reservationSearchHandler2(req, res) {
    const { reservationSearch } = req.body;
    console.log("Searching reservation with search term: ", reservationSearch);

    try {
        const client = await getClient();
        const results = await searchReservation(client, reservationSearch);

        console.log(results);
        
        res.json(results);
    } catch(e) {
        console.log("Reservation Search Error: ", e);
        res.status(500).json({ error: "Reservation Search failed" });
    }
}

async function searchReservation(client, search : string) {

    const cursor = await client.db("nail_by_young_db").collection("reservations").find({
        $or: [
            { name: { $regex: search, $options: "i" }},
            { contact: { $regex: search, $options: "i" }},
            { date: { $regex: search, $options: "i"}},
            { time: { $regex: search, $options: "i"}},
            { status: { $regex: search, $options: "i" }},
            { notes: { $regex: search, $options: "i" }}
            ]
        });
 
    try {
        const idSearch = await client.db("nail_by_young_db").collection("reservations").findOne({ _id: new ObjectId(search) });
        if (idSearch) return idSearch;
    } catch {}
 
    return cursor.toArray();
}
