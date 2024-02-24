const express = require("express");
const cors = require("cors");
const moviesController = require("./controller/moviesController");
const { getMovies, createMovie, deleteMovie, editMovie } = moviesController;

const app = express();
const PORT = 4004;
const baseURL = `/api/movies`;

app.use(express.json());
app.use(cors());

app.get(baseURL, getMovies);
app.post(baseURL, createMovie);
app.delete(`${baseURL}/:identification`, deleteMovie);
app.put(`${baseURL}/:identification`, editMovie);

app.listen(PORT, () =>
  console.log(`The express server is running on port ${PORT}`)
);
