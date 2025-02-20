import { ObjectId } from "mongodb";
import { getClient } from "../connection";

export const dbHandlers = {
    employeeAddHandler,
    employeeSearchHandler,
    employeeEditHandler,
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add Employee
async function employeeAddHandler(req, res){

    const { employeeName, employeeRole, employeeEmail, employeePhone } = req.body;

    const employeeInfo = {
        "name" : employeeName,
        "email" : employeeEmail,
        "phone" : employeePhone,
        "role" : employeeRole,
        "schedule" : {}
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
// Edit Employee
async function employeeEditHandler(req, res){

    const { employeeId, employeeShiftDay, employeeStartTime, employeeEndTime } = req.body;

    const shift = {start_time : employeeStartTime, end_time : employeeEndTime };


    try{
            const client = await getClient();
            const result = await editEmployee(client, employeeId, employeeShiftDay, shift);
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

async function editEmployee(client, updateId, employeeDay, employeeShift) {


    const result = await client.db("nail_by_young_db").collection("employee").updateOne(
                                                                                { _id : ObjectId.createFromHexString(updateId) }, 
                                                                                [
                                                                                    { 
                                                                                      $set: { 
                                                                                        [`schedule.${employeeDay}`]: { 
                                                                                          $cond: { 
                                                                                            if: { $isArray: [`$schedule.${employeeDay}`] }, 
                                                                                            then: { $concatArrays: [`$schedule.${employeeDay}`, [employeeShift]] }, 
                                                                                            else: [employeeShift] 
                                                                                          } 
                                                                                        } 
                                                                                      } 
                                                                                    }
                                                                                  ]
                                                                            );
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Edit Employee
