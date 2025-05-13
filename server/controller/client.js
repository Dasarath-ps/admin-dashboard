import getCountryiso3 from 'country-iso-2-to-3';
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from '../models/User.js';
export const getProducts = async (req, res) => {
  try {
    const Products = await Product.find();
    const ProductsWithStat = await Promise.all(
      Products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id
        })
        return {
          ...product._doc, stat,
        }
      })
    )
    res.status(200).json(ProductsWithStat)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const getCustomer = async (req, res) => {
  try {
    const customer = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customer);

  } catch (err) {
    res.status(404).json({ message: err.message })
  }

}

export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    const mappedLocations = await users.reduce((acc, { country }) => {
      const countryISO3 = getCountryiso3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {})

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count }
      })
    res.status(200).json(formattedLocations);
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}