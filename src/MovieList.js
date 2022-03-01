import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch("https://62075b8c92dd6600171c0d88.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  }

  useEffect(getMovies, []);

  const deleteMovie = (id) => {
                
    fetch(
      `https://62075b8c92dd6600171c0d88.mockapi.io/movies/${id}`,
      {
        method: "DELETE",
      }
    ).then(()=> getMovies())
  }

  const history = useHistory();
  return (
    <div className="movie-list">
      {movies.map(({ name, rating, summary, poster, id }) => (
        <Movie
          key={id}
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          id={id}
          deleteButton={
            <IconButton
              onClick={() => deleteMovie(id)}
              className="movie-show-button"
              aria-label="delete movie"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => history.push("/movies/edit/" + id)}
              className="movie-show-button"
              aria-label="edit movie"
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}

// console.log("Deleting...", index);
                // const deleteIdx = index;
                // const remainingMovies = movies.filter(
                //   (mv, idx) => idx !== deleteIdx
                // );
                // setMovies(remainingMovies);