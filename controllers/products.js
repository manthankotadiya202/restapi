const Product = require("../model/products");

const getAllProducts = async (req, res) => {
  const { name, email, sort, select } = req.query;
  const queryObject = {};
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (email) {
    queryObject.email = { $regex: email, $options: "i" };
  }
  let apiData = Product.find(queryObject);
  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 1;

  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);

  const data = await apiData;

  res.status(200).json({ data });
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I Got All Testing Products" });
};

module.exports = { getAllProducts, getAllProductsTesting };
