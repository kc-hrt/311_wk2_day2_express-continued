const products = require('../data/products');

const list = (req, res) => res.json(products);

const show = (req, res) => {
  res.json(products.filter(products => products._id === parseInt(req.params.id)));
};

const create = (req, res) => {
  products.push({
    _id: products.length + 1,
    name: req.body.name,
    description: req.body.description,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating,
    reviews: req.body.reviews
  });
  res.json(products);
};

module.exports = { list, show, create };