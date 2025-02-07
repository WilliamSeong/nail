import { Router } from "express";
import { dbHandlers } from './handlers';

const router = Router();

router.post('/add/employee', dbHandlers.EmployeeInfo);

export default router;