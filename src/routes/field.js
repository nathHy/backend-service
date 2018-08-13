const express = require('express');
const Router = express.Router();
const Field = require('../models/field');

const wrapFunc = func => (req, res, next) => {
  const { body, params } = req;
  return func({ body, params })
    .then(res.json)
    .catch(next);
}

Router.route('/fields')
  .get(wrapFunc(Field.read))
  .post(wrapFunc(Field.create));

Router.route('/fields/:id')
  .get(wrapFunc(Field.readById))
  .put(wrapFunc(Field.updateById));

module.exports = Router