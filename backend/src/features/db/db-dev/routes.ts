import { Router } from "express";
import { dbHandlers } from './handlers';

const router = Router();

router.post('/employee/add', dbHandlers.employeeAddHandler);

router.post('/employee/search', dbHandlers.employeeSearchHandler);

router.post('/reservation/make', dbHandlers.reservationHandler);

export default router;