'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  id: Number,
  title: String,
  speaker: String,
  date: Date,
  cd : Boolean,
  stream : Boolean,
  dvd : Boolean,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Service', ServiceSchema);