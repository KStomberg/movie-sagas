const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Takes all movies and sends them to index.js
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM movies';
  pool
    .query(queryText)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.error('ERROR IN GET /movies');
      res.sendStatus(500);
    });
});

//Takes movie info and adds to DB
router.post('/', (req, res) => {
  console.log(req.body);
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`;

  pool
    .query(insertMovieQuery, [
      req.body.title,
      req.body.poster,
      req.body.description,
    ])
    .then((result) => {
      console.log('New Movie Id:', result.rows[0].id);

      const createdMovieId = result.rows[0].id;

      //Takes genre info and adds to DB
      const insertMovieGenreQuery = `
      INSERT INTO "movie_genre" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `;

      pool
        .query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id])
        .then((result) => {
          res.sendStatus(201);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

//Joins tables together so it displays only the genre of specified movie
router.get('/:id', (req, res) => {
  console.log('/GET', req.params);
  const queryText = `SELECT * FROM "movies"
	JOIN "movie_genre"
		ON "movies"."id" = "movie_genre"."movie_id"
	JOIN "genres"
		ON "movie_genre"."genre_id" = "genres"."id"
WHERE "movies"."id" = ${req.params.id};`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.error('ERROR IN JOIN GET /movies', err);
      res.sendStatus(500);
    });
});

module.exports = router;
