import Overview from "../models/Overview.js";

export const getSales = async (req, res) => {
  try {
    const overview = await Overview.find();
    res.status(200).json(overview[0])

  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
}