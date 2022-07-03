import Movie from '../Component/Movie';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then((response) => response.json())
      .then((json) => {
        setMovie(json.data.movies);
        setLoading(false);
        console.log(json.data.movies);
      });
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div key={movies.id} className={styles.movies}>
          <h3 className={styles.title}>Movie List</h3>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              CoverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
