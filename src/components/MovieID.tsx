import React from "react";
import { MovieQuery } from "../Types";
import styled, { css } from "styled-components";
import { Rate } from "antd";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  h1, h2{
    margin: 0;
    font-weight: 700;
    color:#E21221;
    letter-spacing: 4px;
  }
  .mobileTitle{
    display:none;
    margin: 0;
  }
  @media screen and (max-width: 768px){
    flex-direction: column;
    padding: 2rem 4rem;
    .deskTitle{
      display: none;
    }
    .mobileTitle{
      display:flex
    }
  }
  @media screen and (max-width: 500px){
    flex-direction: column;
    padding: 2rem;
  }
  @media screen and (max-width: 400px){
    flex-direction: column;
    padding: 2rem;
  }
`;
const ImgContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
    border-radius: 20px;
  }
  @media screen and (max-width: 768px){
    padding: 0 4rem;
    width: 100%;
  }
  @media screen and (max-width: 500px){
    width: auto;
    height: 100%;
    padding: 0;
  }

`;
const DataContainer = styled.div`
  width: 60%;
  @media screen and (max-width: 768px){
    width: 100%;
  }

  p{
    margin: 0;
    padding: .5rem 0;
    align-self: center;
    font-size: 18px;
  }
`;
const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-content: center;
  p{
    margin: 0;
    padding: .5rem 0;
    align-self: center;
  }
  .ant-rate{
    padding: 4px 0;
  }
`;
const ratingValue = (value: any) => {
  console.log((parseFloat(value)/2))
  return ((parseFloat(value)/2));
}

const MovieID = (props: { movieData: MovieQuery }) => {
  const nodeRef = React.useRef(null);

  return (
    <MovieContainer>
      <h1 className='mobileTitle'>{props.movieData.Title}</h1>

      <ImgContainer>
        <img src={props.movieData.Poster != 'N/A'? props.movieData.Poster: 'https://placeimg.com/400/550/animals'} />
      </ImgContainer>

      <DataContainer>
        <div>
          <p><strong>Genre:</strong> {props.movieData.Genre}</p>
          <h1 className='deskTitle'>{props.movieData.Title}</h1>
          <RateContainer>
            <p><strong>Rating imdb:</strong> {props.movieData.imdbRating}/10</p>
            <Rate allowHalf defaultValue={ratingValue(props.movieData.imdbRating)} />
          </RateContainer>
          <p><strong>Year:</strong> {props.movieData.Year}</p>
          <p><strong>Rated:</strong> {props.movieData.Rated}</p>
          <p><strong>Runtime:</strong> {props.movieData.Runtime}</p>
        </div>
        <hr />
        <div>
          <h2>Decription</h2>
          <p>{props.movieData.Plot}</p>
          <p><strong>Actors:</strong> {props.movieData.Actors}</p>
          <p><strong>Director:</strong> {props.movieData.Director}</p>
        </div>
      </DataContainer>
    </MovieContainer>
  );
};

export default MovieID;
