const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
  time: String,
  availableSeats: Number
});

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  duration: Number,
  rating: String,
  showtimes: [showtimeSchema]
});

module.exports = mongoose.model('Movie', movieSchema);
