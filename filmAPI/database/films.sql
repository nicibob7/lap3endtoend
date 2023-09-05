DROP TABLE IF EXISTS films;

CREATE TABLE films (
    film_id INT GENERATED ALWAYS AS IDENTITY,
    film_name VARCHAR(30) UNIQUE NOT NULL,
    film_genre VARCHAR(500),
    PRIMARY KEY (film_id)
);

INSERT INTO films
    (film_name, film_genre)
VALUES
    ('Harry Potter', 'Fantasy'),
    ('Star Wars', 'Sci-Fi'),
    ('The Shining', 'Horror'),
    ('The Shawshank Redemption', 'Drama'),
    ('The Godfather', 'Crime'),
    ('The Dark Knight', 'Action'),
    ('Pulp Fiction', 'Crime'),
    ('Forrest Gump', 'Drama'),
    ('The Matrix', 'Sci-Fi')