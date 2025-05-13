import Overview from '../models/Overview.js';
import Transaction from '../models/Transaction.js';
import User from '../models/User.js';
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getDashboardStats = async (req, res) => {
  try {
    // hardcoded values

    const currentMonth = "November";
    const currentYear = 2021;
    const currentDay = "2021-11-15";

    // Recent Transactions

    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });;
    // Overviews

    const overview = await Overview.find({
      year: currentYear
    })
    const {
      totalCutomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory
    } = overview[0]

    const thisMonthStats = overview[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    })
    const todayStats = overview[0].dailyData.find(({ date }) => {
      return date === currentDay;
    })

    res.status(200).json({
      totalCutomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions
    })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}











