
import mongoose from 'mongoose';

const TransactonSchema = new mongoose.Schema({

  userId: String,
  cost: String,
  products: {
    type: [mongoose.Types.ObjectId],
    of: Number
  }
},
  { timestamps: true }
)

const Transaction = mongoose.model("Transaction", TransactonSchema);

export default Transaction;