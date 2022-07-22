import React from "react";
import { MovieQuery } from "../Types";
import styled, { css } from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  @media screen and (max-width: 550px){
    flex-direction: column;
    padding: 2rem 4rem;
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
  }
  @media screen and (max-width: 500px){
    width: auto;
    height: 100%;
  }

`;
const DataContainer = styled.div`

`;

const MovieID = (props: { movieData: MovieQuery }) => {
  return (
    <MovieContainer>
      <ImgContainer>
        <img src={props.movieData.Poster} />
      </ImgContainer>

      <DataContainer>
        <div>
          <p>Genre: {props.movieData.Genre}</p>
          <h1>{props.movieData.Title}</h1>
          <p>ESTRELLAS</p>
          <p>Year: {props.movieData.Year}</p>
          <p>Rated: {props.movieData.Rated}</p>
          <p>Runtime: {props.movieData.Runtime}</p>
        </div>
        <hr />
        <div>
          <h2>Decription</h2>
          <p>{props.movieData.Plot}</p>
          <p>Actors: {props.movieData.Actors}</p>
          <p>Director: {props.movieData.Director}</p>
        </div>
      </DataContainer>
    </MovieContainer>
  );
};

export default MovieID;
