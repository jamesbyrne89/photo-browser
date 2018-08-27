import MaterialIcon from 'material-icons-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledPhotoTile = styled.figure`
  position: relative;
  margin: 0;
  padding: 1em;
  background: #fff;
  border-radius: 5px;
  font-size: 0.875rem;
  transition: all 0.1s ease-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  span {
    margin: auto 0 0 0;
  }
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0 2px 2px 0 rgba(60, 64, 67, 0.08),
      0 2px 6px 2px rgba(60, 64, 67, 0.16);
  }
`;

const StyledPhotoActions = styled.span`
  display: flex;
  position: relative;
  z-index: 2;
`;

const PhotoTile = (props: any) => {
  const handleToggleFavourite = () => {
    const details = {
      url: props.url,
      albumId: props.albumId,
      id: props.id,
      thumbnailUrl: props.thumbnailUrl,
      title: props.title
    };
    props.toggleFavourite(details);
  };

  return (
    <StyledPhotoTile>
      <Link
        to={{
          pathname: `/img/${props.albumId}/${props.id}`,
          state: {
            modal: true,
            id: props.id,
            albumId: props.albumId
          }
        }}
      />
      <img src={props.url} />
      <figcaption>
        <p>{props.title}</p>
      </figcaption>
      <StyledPhotoActions>
        <button onClick={handleToggleFavourite}>
          <MaterialIcon
            icon={props.isFavourite ? 'favorite' : 'favorite_outline'}
            style={{ cursor: 'pointer' }}
          />
        </button>
      </StyledPhotoActions>
    </StyledPhotoTile>
  );
};

export default PhotoTile;
