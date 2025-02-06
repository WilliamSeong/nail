import { Router } from "express";
import { dbHandlers } from './handlers';

const router = Router();

router.get('/insert', dbHandlers.dbInsert);

router.get('/read', dbHandlers.dbRead);

router.get('/read/many', dbHandlers.dbReadMany);

router.get('/dbUpdate', dbHandlers.dbUpdate);

router.get('/dbUpsert', dbHandlers.dbUpsert);

router.get('/update/many', dbHandlers.dbUpdateMany);

router.get('/delete', dbHandlers.dbDelete);

router.get('/delete/many', dbHandlers.dbDeleteMany);


export default router;