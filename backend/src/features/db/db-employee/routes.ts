import { Router } from "express";
import { dbHandlers } from './handlers';

const router = Router();

router.post('/add', dbHandlers.employeeAddHandler);

router.post('/search', dbHandlers.employeeSearchHandler);

export default router;