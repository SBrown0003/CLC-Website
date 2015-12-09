'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  id: Number,
  name: String,
  info: String,
  active: Boolean,
  date: Date,
  location: String
});

module.exports = mongoose.model('Event', EventSchema);