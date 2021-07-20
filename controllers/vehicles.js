const vehicles = require('../data/vehicles');

const list = (req, res) => res.json(vehicles);

const show = (req, res) => {
  res.json(vehicles.filter(vehicles => vehicles._id === parseInt(req.params.id)));
};

const create = (req, res) => {
  vehicles.push({
    _id: vehicles.length + 1,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuel: req.body.fuel,
    city: req.body.city,
    isNew: false
  });
  res.json(vehicles);
};

module.exports = { list, show, create };