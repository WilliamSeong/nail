import { Router } from "express";
import { gmailHandlers } from './handlers';

const router = Router();

router.get('/token', gmailHandlers.getToken);

router.post('/send', gmailHandlers.send);

export default router;