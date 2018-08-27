import * as React from 'react';
import styled from 'styled-components';

export const StyledPhotoGrid = styled.div`
  width: 90%;
  margin: 0 auto 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto auto;
  grid-gap: 1.25rem;
  min-height: 25vw;
  @media (max-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 667px) {
    grid-template-columns: 1fr;
  }
`;

const PhotoGrid = (props: any) => {
  return <StyledPhotoGrid>{props.children}</StyledPhotoGrid>;
};

export default PhotoGrid;
