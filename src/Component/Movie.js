import React from 'react';
import PropTypes from 'prop-types';
import style from './Movie.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from '../routes/About';

function Movie({ id, CoverImg, title, summary, genres, year, rating }) {
  return (
    <div className={style.movie} key={id}>
      <div className={style.subbox01}>
        <img className={style.movie_img} src={CoverImg} alt={title}></img>
      </div>
      <div className={style.subbox02}>
        <h2 className={style.title}>
          <Link className={style.title} to={`/about/${id}`}>
            {title}({year})
          </Link>
          
        </h2>
        <ul className={style.genres}>
          {genres.map((item) => (
            <li className={style.li} key={item}>
              #{item}
            </li>
          ))}
        </ul>

        <p className={style.rating}>평점 : {rating}</p>
        <p className={style.context}>{summary.slice(0, 300)}...</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  CoverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};
export default Movie;
