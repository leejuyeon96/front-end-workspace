import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = ({ list, deleteMovie }) => {
  const onClick = (e) => {
    deleteMovie(e.target.id);
  };
  return (
    <>
      <h1>Movies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.releaseDate}</td>
              <td>
                <button onClick={onClick} id={item.id}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Create = ({ addMovie }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const onSubmit = (e) => {
    e.preventdefault();

    if (id === "" || title === "") {
      alert("모든 값 입력");
      return;
    }

    addMovie(id, title, genre, releaseDate);
    setId("");
    setTitle("");
    setGenre("");
    setReleaseDate("");
  };

  return (
    <>
      <h1>Create Movie</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="df"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </>
  );
};
const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "movie",
      genre: "drama",
      releaseDate: "df0",
    },
    {
      id: 1,
      title: "movie",
      genre: "drama",
      releaseDate: "df0",
    },
  ]);

  const addMovie = (id, title, genre, releaseDate) => {
    const result = movies.some((item) => {
      return item.id === parseInt(id);
    });
    if (result) {
      alert("중복x");
      return;
    }

    const newMovie = { id: parseInt(id), title, genre };
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = (id) => {
    const newList = movies.filter((item) => item.id !== parseInt(id));
    setMovies(newList);
  };
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">List</Link>
        </li>
        <li>
          <Link to="/create">Add New Movies</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<Home list={movies} deleteMovie={deleteMovie} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
