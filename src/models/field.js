const bookshelf = require('../helpers/bookshelf.js');

const Field = bookshelf.Model.extend({
  tableName: "fields",
  constructor: function () {
    bookshelf.Model.apply(this, arguments);
    // this.on('saving', this.saving);
  },
  // saving: async (model, attrs, options) => {
  //   // await validateAttrs(model, attrs);
  // }
}, {
    read: async () => {
      return await Field.fetchAll();
    },
    
    create: async ({ body }) => {
      const model = await Field.forge(body).save()
      console.log(`saved field ${model.attributes.name}`);
      return model;
    },

    updateById: async ({ body, params }) => {
      const model = await Field.forge({ id: params.id }).fetch();
      
      if (!model) {
        throw new Error(`Field with id ${params.id} does not exist`);
      }

      const savedModel = await model.save(body, { method: 'update' });
      console.log(`Updated field ${savedModel.attributes.name}`);
      return savedModel;
    }
  }

);



module.exports = Field;
