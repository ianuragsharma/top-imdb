import "./styles.css";
import { useState } from "react";
const movieList = {
  Drama: [
    { name: "The Shawshank Redemption ", rating: "9.3/10", year: "1994" },
    { name: "12 Angry Men", rating: "9.0/10", year: "1957" }
  ],
  Crime: [
    { name: "The Godfather", rating: "9.2/10", year: "1972" },
    { name: "Pulp Fiction", rating: "8.9/10", year: "1994" }
  ],
  Action: [
    { name: "The Dark Knight", rating: "9/0/10", year: "2008" },
    { name: "The Matrix", rating: "8.7", year: "1999" }
  ],
  Adventure: [
    {
      name: "The Lord of the Rings: The Return of the King",
      rating: "8.9/10",
      year: "2003"
    },
    { name: "Inception", rating: "8.8", year: "2010" }
  ],
  Biography: [
    { name: "Schindler's List", rating: "8.9", year: "1993" },
    { name: "Goodfellas", rating: "8.7/10", year: "1990" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Drama");
  function generSelector(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Top IMDB Moveis</h1>
      {Object.keys(movieList).map((genre) => (
        <button
          onClick={() => generSelector(genre)}
          style={{
            color: "white",
            cursor: "pointer",
            background: "#1F2937",
            borderRadius: "5px",
            padding: "0.5rem  1rem",
            border: "none",
            margin: "1rem 0.3rem"
          }}
        >
          {genre}
        </button>
      ))}
      <br />
      <div style={{ textAlign: "left" }}>
        <ol>
          {movieList[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                padding: "1.55rem",
                borderBottom: "2px solid #D1D5DB"
              }}
            >
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
              <div style={{ fontSize: "smaller" }}> {movie.year} </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
