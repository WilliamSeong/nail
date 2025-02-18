import { ObjectId } from "mongodb";
import { getClient } from "../connection";

export const dbHandlers = {
    employeeAddHandler,
    employeeSearchHandler,
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add Employee
async function employeeAddHandler(req, res){

    const { employeeName, employeeRole, employeeEmail, employeePhone, employeeSchedule } = req.body;

    const employeeInfo = {
        "name" : employeeName,
        "email" : employeeEmail,
        "phone" : employeePhone,
        "role" : employeeRole,
        "schedule" : employeeSchedule,
        "exceptions" : []
      };

    try{
            const client = await getClient();
            const result = await addEmployee(client, employeeName, employeePhone, employeeInfo);
            console.log(result);
            if (result.matchedCount === 1){
                console.log(`Employee Information Updated`);
            } else {
                console.log(`New employee created with the following id: ${result.upsertedId}`);
            }
        } catch(e) {
            console.log("Insert error: ", e);
        }
}

async function addEmployee(client, updateName, updatePhone, employeeInfo) {
    const result = client.db("nail_by_young_db").collection("employee").updateOne({ name : updateName, phone : updatePhone }, { $set: employeeInfo }, { upsert : true});
    return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Search Employee

async function employeeSearchHandler(req, res){
    const { employeeSearch } = req.body;
    console.log("Employee Search initiated: ", employeeSearch);

    try {
        const client = await getClient();
        const results = await searchEmployee(client, employeeSearch);

        console.log(results);
        
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

