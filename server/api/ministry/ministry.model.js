'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MinistrySchema = new Schema({
  id: Number,
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Ministry', MinistrySchema);