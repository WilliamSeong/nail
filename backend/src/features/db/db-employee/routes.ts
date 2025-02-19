import { Router } from "express";
import { dbHandlers } from './handlers';

const router = Router();

router.post('/add', dbHandlers.employeeAddHandler);

router.post('/search', dbHandlers.employeeSearchHandler);

router.post('/edit', dbHandlers.employeeEditHandler);


export default router;