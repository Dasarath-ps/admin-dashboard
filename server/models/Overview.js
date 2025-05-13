
import mongoose from 'mongoose';

const OverviewSchema = new mongoose.Schema({
  totalCutomers: Number,
  yearlySalesTotal: Number,
  yearlyTotalSoldUnits: Number,
  year: Number,
  monthlyData:
    [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number
      }
    ],
  dailyData:
    [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number
      }
    ],
  salesByCategory:
  {
    type: Map,
    of: Number
  }
},
  { timestamps: true }
)

const Overview = mongoose.model("Overviews", OverviewSchema);

export default Overview;