import { useState,  useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory, useParams} from "react-router-dom";

export function EditMovie() {
  const { id } = useParams();
  const history = useHistory();
  // const movie = movies[id];

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`https://62075b8c92dd6600171c0d88.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);


    return movie ? <UpdateMovie movie={movie}/> : "";
  };




function UpdateMovie({movie}){

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const history = useHistory();

  const editMovie = () => {
    const updatedMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    console.log(updatedMovie);

    fetch(
      `https://62075b8c92dd6600171c0d88.mockapi.io/movies/${movie.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedMovie),
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
        variant="standard" />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="Movie poster url"
        variant="standard" />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="Movie rating"
        variant="standard" />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="Movie summary"
        variant="standard" />
         <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Movie trailer"
        variant="standard" />
      <Button onClick={editMovie} variant="outlined">
        Save
      </Button>
    </div>
  )
  }
