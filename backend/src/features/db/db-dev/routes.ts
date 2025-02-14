import { Router } from "express";
import { dbHandlers } from './handlers';

const router = Router();

router.post('/employee/add', dbHandlers.employeeAddHandler);

router.post('/employee/search', dbHandlers.employeeSearchHandler);

router.post('/reservation/make', dbHandlers.reservationCreateHandler);

router.post('/reservation/search', dbHandlers.reservationSearchHandler);

router.post('/reservation/time/search', dbHandlers.availableReservationSearchHandler);

router.post('/reservation/search', dbHandlers.reservationSearchHandler);

router.post('/reservation/search/2', dbHandlers.reservationSearchHandler2);



export default router;