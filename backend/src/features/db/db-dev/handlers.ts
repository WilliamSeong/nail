import { ObjectId } from "mongodb";
import { getClient } from "../connection";

export const dbHandlers = {
    employeeAddHandler,
    employeeSearchHandler,
    reservationCreateHandler,
    reservationSearchHandler,
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
    const { reservationName, reservationContact, reservationDate, reservationNotes } = req.body;

    const reservationDetails = {
        name : reservationName,
        contact : reservationContact,
        date : reservationDate,
        status : "confirmed",
        notes : reservationNotes
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
// Search Reservation Date


async function reservationSearchHandler(req, res) {
    const { reservationSearch } = req.body;

    try {
        const client = await getClient();
        const result = await searchForReservation(client, reservationSearch);
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log("Reservation create error: ", e);
        res.status(500).json({ error: "Reservation failed" });
    }
}

async function searchForReservation(client, reservationSearch : string){
    const cursor = client.db("nail_by_young_db").collection("reservations").find({ date : reservationSearch }).project({ name : 1, _id : 0 });

    try {
        const idSearch = await client.db("nail_by_young_db").collection("reservations").findOne({ _id: new ObjectId(reservationSearch) }).project({ name : 1, _id : 0 });
        if (idSearch) return idSearch;
    } catch {}

    return cursor.toArray();
}