import { Skeleton } from "antd";
import React from "react";
import styled from "styled-components";

const StyledSkeleton = styled(Skeleton)`
  width: 80%;
`;

const MovieSkeleton = () => {
  return (
    <div style={{ padding: " 1rem 4rem" }}>
      <StyledSkeleton
        active
        avatar={{ size: 350, shape: "square", }}
        paragraph={{ rows: 8 }}
      ></StyledSkeleton>
    </div>
  );
};

export default MovieSkeleton;
