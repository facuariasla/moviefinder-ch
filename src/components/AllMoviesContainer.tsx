import { FilterOutlined } from "@ant-design/icons";
import { Spin, Button, Modal, Pagination, PaginationProps } from "antd";
import Search from "antd/lib/input/Search";
import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import { MovieQuery, MovieSearch, SearchData } from "../Types";
import MovieCard from "./MovieCard";
import FilterModal from "./subcomponents/FilterModal";

const BodyHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
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
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

const StyledSearcher = styled(Search)`
  max-width: 600px;
  width: 100%;
  input,
  button {
    height: 50px;
    font-size: 20px;
  }
  span{
    font-size: 20px;
  }
  input {
    border-radius: 10px;
    background-color: #ffffff5f;
  }
`;

const StyledMovieContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  /* grid-template-columns: repeat(5, 320px); */
  grid-template-rows: auto;
  padding: 1rem;
  gap: 20px;
  justify-items: center;
  @media screen and (min-width: 1550px) {
    padding: 0 200px;
  }
`;


export const StyledSpin = styled(Spin)`
.ant-spin-dot-item {
  background-color: #E21221;
}
`; 

const StyledPagination = styled(Pagination)`
  a{
    color: #fff;
  }
  li{
    background: #E21221;
  }
  .ant-pagination-item-link{
    background: #E21221;
    color: #fff;

  }
`;


const AllMoviesContainer: React.FC = () => {
  const [movies, setMovies] = useState<SearchData>();
  const [first5Movies, setFirst5Movies] = useState<Array<Object>>([]);
  const [second5Movies, setSecond5Movies] = useState<Array<Object>>([]);

  const [movieSearched, setMovieSearched] = useState<String>();
  const [loading, setLoading] = useState<boolean>(false);
  const [pages, setPages] = useState<number>();
  const [actualPage, setActualPage] = useState<number>(1);

  const [seeMore, setSeeMore] = useState<boolean>(false);

  const onSearch = (value: string) => {
    if(value != movieSearched){
      setLoading(true);
      setFirst5Movies([]);
      setSecond5Movies([]);
      setPages(0);
    }
    console.log(value);
    setMovieSearched(value);
  };

  const paginationChange = (page: any) => {
    console.log(`page ${page}`);
    setSeeMore(false);
    setActualPage(page);
  };

  // Request de 1 pelicula
  useEffect(() => {
    // import.meta.env.VITE_TEST_VAR
    const query = async () => {
      // https://www.omdbapi.com/?s=Batman&page=2&y=2013&Type=movie&apikey=30334a6d
      // `https://www.omdbapi.com/?s=Batman&page=2&apikey=${import.meta.env.VITE_OMDB_KEY}`
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${movieSearched}&apikey=${
            import.meta.env.VITE_OMDB_KEY
          }&Type=&page=${actualPage}&year=`
        );
        const data = await res.json();
        console.log(data);
        setMovies(data);
        if (data.Response === "True") {
          if (data.Search.length > 5) {
            let firstPart = data.Search.slice(0, 5);
            let secondPart = data.Search.slice(5, 10);
            setFirst5Movies(firstPart);
            setSecond5Movies(secondPart);
            setSeeMore(false)
            let pagesCount = parseInt(data.totalResults);
            console.log(pagesCount);
            setPages(pagesCount);
          } else {
            setFirst5Movies(data.Search);
          }
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    if (movieSearched) query();
  }, [movieSearched, actualPage]);

  return (
    <BodyHomeContainer>
      <StyledSearchContainer>
        <div>
          <StyledSearcher placeholder="Search..." onSearch={onSearch} />

          {/* <FilterOutlined
            style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
          /> */}
          <FilterModal />
        </div>
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
          <StyledSpin size='large'/>
        ) : (
          ''
        )}
        {seeMore
          ? second5Movies?.map((movie: any) => (
              <MovieCard key={movie.imdbID} movieData={movie} />
            ))
          : ""}

        {second5Movies?.length >0 ? (
          <span
            onClick={() => setSeeMore(true)}
            style={{
              display: `${seeMore ? "none" : "flex"}`,
              cursor: "pointer",
              alignSelf: "center",
              fontSize:'20px',
              fontWeight:'500'

            }}
          >
            SEE MORE...{" "}
          </span>
        ) : (
          ""
        )}
      </StyledMovieContainer>

      {pages ? (
        <StyledPagination
          defaultCurrent={1}
          total={pages}
          showSizeChanger={false}
          onChange={paginationChange}
        />
      ) : (
        ""
      )}
    </BodyHomeContainer>
  );
};

export default AllMoviesContainer;
