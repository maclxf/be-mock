const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String, isRequired: true },
  treeHeader: { type: Object, isRequired: true },
  treeRequest: { type: Object, isRequired: true },
  treeResponse: { type: Object, isRequired: true },
  mock: { type: Object, isRequired: true },
  createAt: Date,
  updateAt: Date,
});

module.exports = mongoose.model('Doc', schema);