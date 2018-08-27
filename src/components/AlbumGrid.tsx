import * as React from 'react';
import AlbumTile from './AlbumTile';
import Pagination from './Pagination';

import styled from 'styled-components';

export const StyledAlbumGrid = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1.25rem;
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
const AlbumGrid = (props: any) => {
  return (
    <React.Fragment>
      <StyledAlbumGrid>
        {props.albums.map((album: any) => (
          <AlbumTile
            key={album}
            id={album}
            size={
              props.photos.filter((photo: any) => photo.albumId === album)
                .length
            }
            coverUrl={
              props.photos.filter((photo: any) => photo.albumId === album)[0] &&
              props.photos.filter((photo: any) => photo.albumId === album)[0]
                .url
            }
          />
        ))}
      </StyledAlbumGrid>
      <Pagination
        slug="albums"
        currentPage={props.currentPage}
        fetchPhotos={props.fetchPhotos}
        {...props}
      />
    </React.Fragment>
  );
};

export default AlbumGrid;
