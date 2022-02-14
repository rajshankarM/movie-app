import { useState } from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { EditMovie } from "./EditMovie";
import { NotFound } from "./NotFound";
import { Welcome } from "./Welcome";
import { AddMovie } from "./AddMovie";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';


export default function App() {
  const INITIAL_MOVIES = [
    {
      id: "100",
      name: "Bachelor",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Bachelor_2021_film.jpg",
      rating: 7,
      summary:
        "A young couple must face each other in court after the break-up of their relationship.",
      trailer: "https://www.youtube.com/embed/nPAthjZdBUY",
    },
    {
      id: "101",
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/Gc6dEDnL8JA",
    },
    {
      id: "102",
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU",
    },
    {
      id: "103",
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0",
    },

    {
      id: "104",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8",
    },
    {
      id: "105",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: "106",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI",
    },
    {
      id: "107",
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w",
    },
  ];

  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const history = useHistory();
  const [mode, setMode] = useState("dark")

  const theme = createTheme({
    palette : {
      mode: mode,
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{borderRadius: "0px", minHeight: "100vh"}}>
    <div className="App">
      <AppBar position="static" style={{ marginBottom: "24px"}}>
        <Toolbar variant="dense">
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/")}
          >
            Home
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/movies")}
          >
            Movies
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/add-movies")}
          >
            Add Movies
          </Button>
          <Button
            startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            style={{ marginLeft: "auto" }}
            variant="text"
            color="inherit"
            onClick={() => setMode(mode=== "light" ? "dark" : "light")}
          >
            {mode== "light" ? "Dark" : "Light"} Mode
          </Button>
        </Toolbar>
      </AppBar>
     
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/flims">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies/edit/:id">
          <EditMovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails movies={movies} />
        </Route>
        <Route path="/movies">
          <MovieList movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/add-movies">
          <AddMovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}
