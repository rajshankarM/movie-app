import { useHistory, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export function MovieDetails({ movies }) {
  const history = useHistory();
  const { id } = useParams();
  const movie = movies[id];
  console.log(movie);
  const styles = {
    color: movie.rating < 8 ? "crimson" : "green",
    fontWeight: "bold",
  };
  return (
    <dvi>
      <iframe
        width="100%"
        height="700"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating" style={styles}>
            ⭐{movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          onClick={() => history.goBack()}
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      </div>
    </dvi>
  );
}
