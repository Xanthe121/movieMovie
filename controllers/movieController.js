const Movie = require('../models/Movie');

exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

exports.createMovie = async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.json({ message: 'Movie added', movie });
};

exports.updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Movie updated', movie });
};

exports.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: 'Movie deleted' });
};
