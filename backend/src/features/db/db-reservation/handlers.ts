import { ObjectId } from "mongodb";
import { getClient } from "../connection";

export const dbHandlers = {
    reservationCreateHandler,
    availableReservationSearchHandler,
    reservationSearchHandler,
    reservationSearchHandler2,
    reservationCalendarHandler
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Reservation for Calendar

async function reservationCalendarHandler(req, res) {

    const { start_date, end_date } = req.body;
    console.log(start_date, end_date);

    try {
        console.log("We in reservation calendar");
        const client = await getClient();
        const result = await reservationCalendar(client, start_date, end_date);

        res.json(result);
    } catch(e) {
        console.log("Reserevation Calendar Error: ", e);
    }
}

async function reservationCalendar(client, start_date, end_date) {
    const cursor = await client.db("nail_by_young_db").collection("reservations").find({date : {$gte : start_date, $lte : end_date}}).sort({ time: 1 }).project({_id : 0, name : 1, date : 1, time : 1});
    const result = cursor.toArray();
    return result;
}