import { ObjectId } from "mongodb";
import { getClient } from "../connection";

export const dbHandlers = {
    EmployeeInfo,
}

async function EmployeeInfo(req, res){

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