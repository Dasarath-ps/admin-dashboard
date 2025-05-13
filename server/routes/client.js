import express from 'express';
import { getCustomer, getGeography, getProducts } from '../controller/client.js';
import { getTransaction } from '../controller/transaction.js';
const router = express.Router();
router.get('/products', getProducts);
router.get('/transactions', getTransaction);
router.get('/customer', getCustomer);
router.get('/geography', getGeography)

export default router;