import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { LayoutContainer, StyledLayout } from "../components/HomeLayout";
import MovieID from "../components/MovieID";
import MovieSkeleton from "../components/subcomponents/MovieSkeleton";
import { MovieQuery } from "../Types";

const TheMovie = () => {
  const [movieData, setmovieData] = useState<MovieQuery>();
  const { id } = useParams();

  useEffect(() => {
    const query = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${
          import.meta.env.VITE_OMDB_KEY
        }`
      );
      const data = await res.json();
      setmovieData(data);
      // console.log(data);
    };
    query();
  }, []);

  return (
    <LayoutContainer>
      <StyledLayout>
        {/* Page content */}
        <Header />
        {movieData ? <MovieID movieData={movieData} /> : <MovieSkeleton />}
      </StyledLayout>
    </LayoutContainer>
  );
};

export default TheMovie;
