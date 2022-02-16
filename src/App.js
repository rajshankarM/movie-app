import { useState} from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import {Redirect, Route, Switch } from "react-router-dom";
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
  

  const history = useHistory();
  const [mode, setMode] = useState("dark")

  const theme = createTheme({
    palette : {
      mode: mode,
    }
  });
  
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch("https://62075b8c92dd6600171c0d88.mockapi.io/movies")
  //      .then((data)=> data.json())
  //      .then((mvs)=> setMovies(mvs));
  // }, [])
  

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
            {mode=== "light" ? "Dark" : "Light"} Mode
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
          <EditMovie  />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails  />
        </Route>
        <Route path="/movies">
          <MovieList  />
        </Route>
        <Route path="/add-movies">
          <AddMovie />
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

//<MovieDetails movies={movies} />
//<EditMovie movies={movies} setMovies={setMovies} />
// <MovieList movies={movies} setMovies={setMovies} />
//<AddMovie movies={movies} setMovies={setMovies} />
