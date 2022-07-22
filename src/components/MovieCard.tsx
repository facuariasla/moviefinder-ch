import Card from "antd/lib/card/Card";
import React from "react";
import styled, { css } from "styled-components";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
import type { MovieQuery, MovieSearch } from "../Types";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  /* border: 2px solid red; */
  max-width: 300px;
  min-width: 250px;
  min-height: 280px;
  max-height: 350px;
  overflow-y: hidden;
  position: relative;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const DescriptionContainer = styled.div`
  padding: 0.5rem;
  width: 100%;
  z-index: 2;
  position: absolute;
  position: absolute;
  bottom: 0px;
  color: black;

  background: rgba(255, 255, 255, 0.253);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  p{
    margin: 0;
    padding-bottom: 6px;
    text-align: center;
    font-weight: 600;
  }
  h3 {
    margin: 0;
    color: black;
    font-weight: 700;
    text-align: center;
  }
`;

// https://placeimg.com/1040/480/arch

const MovieCard = (props: { movieData: MovieSearch }) => {
  return (
    <Link to={`/movie/${props.movieData.imdbID}`}>
    <StyledCard>
      <ImgContainer>
        <img
          src={
            props.movieData.Poster != "N/A"
              ? props.movieData.Poster
              : "https://placeimg.com/300/400/animals"
          }
        />
      </ImgContainer>
      <DescriptionContainer>
        <h3 className="card_title">{props.movieData.Title}</h3>
        <p>{props.movieData.Year}</p>
        <p>
          {props.movieData.Type.charAt(0).toLocaleUpperCase() +
            props.movieData.Type.slice(1)}
        </p>
      </DescriptionContainer>
    </StyledCard>
    </Link>
  );
};

export default MovieCard;
