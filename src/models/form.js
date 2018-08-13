const bookshelf = require('../helpers/bookshelf.js');
const Field = require('./field.js');

const Form = bookshelf.Model.extend({
  tableName: "forms",
}, {
    read: async () => {
      return await Form.fetchAll();
    },

    readById: async ({ params }) => {
      return await Form.forge({ id: params.id }).fetch();
    },

    create: async ({ body }) => {
      // todo lookup each key, validate, save if all valid
      // form data into rows linking to field?
      const fieldKeys = Object.keys(body);
      const validForm = Form.validateAttributes(fieldKeys, body);
      
      const model = await Form.forge({ formdata: JSON.stringify(body) }).save()
      console.log(`saved Form ${model.attributes.name}`);
      return model;
    },
    async validateAttributes(fieldNames, attributes) {
      // todo: check if all fields make up a form? if so add 'required' check
      const fieldModels = await Promise.all(fieldNames.map(name => {
        console.log("fetching name",name)
        return Field.forge({ name })
          .fetch();
      }))
      const valid = fieldModels.every(field => Form.validateAttribute(field, attributes));
      return valid;
    },

    validateAttribute(fieldModel, attributes) {
      // todo: validate model exists
      
      const { name, pattern } = fieldModel.attributes;
      const attributeData = attributes[name];
      if (!pattern) return true;
      
      const regex = RegExp(pattern);
      console.info(`Testing ${regex} on ${attributeData}`);
      return regex.test(attributeData);
    }
  }
);

module.exports = Form;
