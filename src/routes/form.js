const express = require('express');
const Router = express.Router();
const Form = require('../models/form');

const wrapFunc = func => (req, res, next) => {
  const { body, params } = req;
  return func({ body, params })
    .then(d => {
      console.log("DATA IS",d);
      res.json(d)
    })
    .catch(next);
}

Router.route('/forms')
  .get(wrapFunc(Form.read))
  .post(wrapFunc(Form.create));

Router.route('/forms/:id')
  .get(wrapFunc(Form.readById))

module.exports = Router