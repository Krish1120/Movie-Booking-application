import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home.js";
import MovieDetails from "./screens/moviedetails/MovieDetails.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/movieinfo"
            element={<MovieDetails></MovieDetails>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
