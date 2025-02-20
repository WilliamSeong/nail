import { Router } from "express";
import { dbHandlers } from './handlers';

const router = Router();

router.post('/make', dbHandlers.reservationCreateHandler);

router.post('/search', dbHandlers.reservationSearchHandler);

router.post('/time/search', dbHandlers.availableReservationSearchHandler);

router.post('/search', dbHandlers.reservationSearchHandler);

router.post('/search/2', dbHandlers.reservationSearchHandler2);

router.post('/calendar', dbHandlers.reservationCalendarHandler);



export default router;