import { useState  } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export function AddMovie() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    console.log(newMovie);
    // setMovies([...movies, newMovie]);


    fetch(
      `https://62075b8c92dd6600171c0d88.mockapi.io/movies/`,
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type" : "application/json"
        }
      }
    ).then(()=> history.push("/movies"))
   
  };

  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="Movie name"
        variant="standard"
      />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Movie poster url"
        variant="standard"
      />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Movie rating"
        variant="standard"
      />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Movie summary"
        variant="standard"
      />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Movie trailer"
        variant="standard"
      />
      <Button onClick={addMovie} variant="outlined">
        Add Movie
      </Button>
    </div>
  );
}


