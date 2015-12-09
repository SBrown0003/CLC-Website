'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  date: String,
  location: string
});

module.exports = mongoose.model('Event', EventSchema);