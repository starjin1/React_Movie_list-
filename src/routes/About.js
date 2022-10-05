import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import stylese from './About.module.css';
import styled from 'styled-components';


const Loading = styled.h3`
font-size: 45px;
color: red;
`;

function About() {
  const { id } = useParams();
  const [loading,setLoading] = useState(true);
  const [mv_detail, setmv_detail] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data.movie);
        setmv_detail(json.data.movie);
      });
  }, []);
  return (
    <div className={stylese.box}>
  
      <div className={stylese.subbox_detail}>
        <h3>
          {mv_detail.title}({mv_detail.year})
        </h3>
        <img
          className={stylese.about_img}
          src={mv_detail.medium_cover_image}
          alt='conver_img'
        ></img>
      </div>
      <div className={stylese.about_subbox02}>
        <ul>
          <span>Genres : </span>
          {/* 데이터가 먼저 다 들어오지도 않았는데 실행되서 오류가 나는 것!! 
          &&를 써서 데이터가 먼저 다 들어오면 실행되도록 바꾸기! 만약 다 들어오지 않는다면 react는 무시하고 건너뜀*/}
          {mv_detail.genres &&
            mv_detail.genres.map((item) => <li key={item}> #{item}</li>)}
        </ul>
        <p> Rating : {mv_detail.rating}</p>
        <p> Runtime : {mv_detail.runtime}분</p>
      </div>
    </div>
  );
}
export default About;
