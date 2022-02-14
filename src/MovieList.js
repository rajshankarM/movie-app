import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";

export function MovieList({ movies, setMovies }) {
  const history = useHistory();
  return (
    <div className="movie-list">
      {movies.map(({ name, rating, summary, poster }, index) => (
        <Movie
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          id={index}
          deleteButton={
            <IconButton
              onClick={() => {
                console.log("Deleting...", index);
                const deleteIdx = index;
                const remainingMovies = movies.filter(
                  (mv, idx) => idx !== deleteIdx
                );
                setMovies(remainingMovies);
              }}
              className="movie-show-button"
              aria-label="delete movie"
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
             style={{marginLeft: "auto"}}
              onClick={() => history.push("/movies/edit/" + index)}
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
