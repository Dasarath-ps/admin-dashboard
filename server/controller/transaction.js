import Transaction from "../models/Transaction.js";

export const getTransaction = async (req, res) => {
  try {
    const { page = 1, pagesize = 20, sort = null, search = "" } = req.query;

    // Parse and format sort
    let sortFormatted = {};
    if (sort) {
      try {
        const sortParsed = JSON.parse(sort);
        sortFormatted = {
          [sortParsed.field]: sortParsed.sort === 'asc' ? 1 : -1
        };
      } catch (err) {
        return res.status(400).json({ message: "Invalid sort parameter" });
      }
    }

    // Search criteria (consistent between queries)
    const searchCriteria = {
      $or: [
        { cost: { $regex: new RegExp(search, "i") } },
        { userId: { $regex: new RegExp(search, "i") } },
        // Add other fields you want to search here
      ]
    };

    const [transaction, total] = await Promise.all([
      Transaction.find(searchCriteria)
        .sort(sortFormatted)
        .skip((page) * pagesize) // Assuming 1-based page number
        .limit(pagesize),

      Transaction.countDocuments(searchCriteria)
    ]);

    res.status(200).json({
      transaction,
      total
    });

  } catch (err) {
    res.status(500).json({ message: err.message }); // 500 for server errors
  }
}