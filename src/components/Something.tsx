import React, { useEffect, useState } from "react";
import Button from "antd/lib/button";
import styled, { css } from "styled-components";
import type { MovieQuery } from "../Types";

const StyledButton = styled(Button)`
  color: palevioletred;
  font-weight: normal;
  :focus {
    color: palevioletred;
    border-color: palevioletred;
  }
  :hover {
    color: palevioletred;
    border-color: palevioletred;
  }
  &.ant-btn-clicked:after {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    border-radius: inherit;
    border: 0 solid palevioletred;
    opacity: 0.4;
    -webkit-animation: buttonEffect 0.4s;
    animation: buttonEffect 0.4s;
    display: block;
  }
`;

const Something: React.FC = () => {
  const [movie, setMovie] = useState<MovieQuery>();
  
  useEffect(() => {
    // const query = async () => {
    //   const res = await fetch('https://www.omdbapi.com/?t=star&apikey=30334a6d');
    //   const data = await res.json();
    //   setMovie(data);
    // };
    // query();
  }, []);

  return (
    <div>
      {/* <Button>BUTTON</Button>
      <StyledButton>STYLED BUTTON</StyledButton> */}
      <ul>
        <li>{movie? movie.Title:''}</li>
      </ul>
    </div>
  );
};

export default Something;
