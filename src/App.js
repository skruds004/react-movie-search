import {useEffect, useState} from 'react'
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  const apiKey = "176d6d84";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    try {
      // Make fetch request and store the response
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      // Parse JSON response into a JavaScript object
      const data = await response.json();

      console.log(data);
      // Set the Movie state to the received data
      setMovie(data);
    }
    catch(e) {
      console.error(e);
    }
  };

  useEffect(() => {
    //Looked into making this random, but the API does not support multiple data requests
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
