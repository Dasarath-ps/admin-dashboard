import express from 'express';
import { getTransaction } from '../controller/transaction.js';
const router = express.Router();

router.get('/transactions', getTransaction);



export default router;