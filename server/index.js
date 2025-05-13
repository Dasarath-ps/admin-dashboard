import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
// import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';
// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
// app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// DATA IMPORTS

// import AffiliateState from './models/AffiliateState.js';
// import { dataProductStat } from './data/index.js';
// import { dataOverallStat } from "./data/index.js";
// import Overview from './models/Overview.js';
// import Product from './models/Product.js';
// import ProductStats from './models/ProductStat.js';
// import { dataTransaction } from './data/index.js';
// import Transaction from './models/Transaction.js';
// ROUTES

app.use('/client', clientRoutes);
app.use('/sales', salesRoutes);
app.use('/management', managementRoutes);
app.use('/general', generalRoutes);

// MONGOOSE SETUP

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
    // Product.insertMany(dataProduct);
    // ProductStats.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // Overview.insertMany(dataOverallStat);
    // AffiliateState.insertMany(dataAffiliateStat);
  })
  .catch((error) => console.log("❌ MongoDB Connection Error:", error));



