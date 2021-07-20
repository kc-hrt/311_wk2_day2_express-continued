const contacts = require('../data/contacts');

const list = (req, res) => res.json(contacts);

const show = (req, res) => {
  res.json(contacts.filter(contacts => contacts._id === parseInt(req.params.id)));
};

const create = (req, res) => {
  contacts.push({
    _id: contacts.length + 1,
    name: req.parms.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  });
  res.json(contacts);
};

module.exports = { list, show, create };