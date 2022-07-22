import { Spin } from "antd";
import Search from "antd/lib/input/Search";
import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import { MovieQuery, MovieSearch, SearchData } from "../Types";
import MovieCard from "./MovieCard";

const BodyHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledMovieContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-rows: auto;
  padding: 1rem;
  gap: 20px;
  justify-items: center;
`;
const StyledSearchContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    margin: 0;
  }
`;

const StyledSearcher = styled(Search)`
  max-width: 500px;
  width: 100%;
  input,
  button {
    height: 50px;
    font-size: 18px;
  }
`;

const AllMoviesContainer: React.FC = () => {
  const [movies, setMovies] = useState<SearchData>();
  const [first5Movies, setFirst5Movies] = useState<Array<Object>>();

  const [movieSearched, setMovieSearched] = useState<String>();
  const [loading, setLoading] = useState(false);

  const onSearch = (value: string) => {
    setLoading(true);
    console.log(value);
    setMovieSearched(value);
  };

  // Request de 1 pelicula
  useEffect(() => {
    // import.meta.env.VITE_TEST_VAR
    const query = async () => {
      // https://www.omdbapi.com/?s=Batman&page=2&y=2013&Type=movie&apikey=30334a6d
      // `https://www.omdbapi.com/?s=Batman&page=2&apikey=${import.meta.env.VITE_OMDB_KEY}`
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${movieSearched}&page=1&Type=movie&apikey=${
            import.meta.env.VITE_OMDB_KEY
          }`
        );
        const data = await res.json();
        console.log(data);
        setMovies(data);
        if (data.Response === "True") {
          let moviesSlice = data.Search.slice(0,5)
          setFirst5Movies(moviesSlice);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (movieSearched) query();
  }, [movieSearched]);

  return (
    <BodyHomeContainer>
      <StyledSearchContainer>
        <StyledSearcher placeholder="Search..." onSearch={onSearch} />

        <div>
          {movies ? (
            <p>
              Total results: {movies?.totalResults ? movies?.totalResults : "0"}
            </p>
          ) : (
            <p>Search a movie!</p>
          )}
        </div>
      </StyledSearchContainer>

      <StyledMovieContainer>
        {movies ? (
          movies.Response === "True" ? (
            first5Movies?.map((movie: any) => (
              <MovieCard key={movie.imdbID} movieData={movie} />
            ))
          ) : (
            <span>{movies?.Error}</span>
          )
        ) : loading ? (
          <Spin />
        ) : (
          <span>ALGUN MENSAJE O IMAGEN DIVERTIDA NO SE</span>
        )}


      </StyledMovieContainer>
    </BodyHomeContainer>
  );
};

export default AllMoviesContainer;
