
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('fields').del()
    .then(function () {
      // Inserts seed entries

      return knex('fields').insert(
        [{
          "type": "text",
          "name": "firstName",
          "required": true
        }, {
          "type": "text",
          "name": "lastName",
          "required": true
        }, {
          "type": "date",
          "name": "dob",
          "required": true
        }, {
          "type": "email",
          "name": "email",
          "pattern": "[a-z0-9.]+@[a-z0-9.]+.com"
        }, 
        // {
        //   "type": "group",
        //   "name": "emergencyContact",
        //   "fields": [{
        //     "type": "text",
        //     "name": "firstName",
        //     "required": true
        //   }, {
        //     "type": "text",
        //     "name": "lastName",
        //     "required": true
        //   }, {
        //     "type": "email",
        //     "name": "email",
        //     "pattern": "[a-z0-9.]+@[a-z0-9.]+.com"
        //   }]
        // }
      ]);
    });
};
