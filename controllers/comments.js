const comments = require('../data/comments');

const list = (req, res) => res.json(comments);

const show = (req, res) => {
  res.json(comments.filter(comments => comments._id === parseInt(req.params.id)));
};

const create = (req, res) => {
  comments.push({
    _id: comments.length + 1,
    body: req.body.body,
    postId: 1
  });
  res.json(comments);
};

module.exports = { list, show, create };