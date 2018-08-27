import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAlbumTile = styled.figure`
  position: relative;
  margin: 0;
  background: #fff;
  border-radius: 5px;
  img {
    width: 100%;
    height: auto;
  }
  figcaption {
    padding: 0.5em;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  &:hover,
  &:focus {
    transform: translateY(-1px);
    box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
      0 1px 3px 1px rgba(60, 64, 67, 0.16);
  }
`;

const StyledAlbumName = styled.figcaption`
  position: absolute;
  top: 10%;
  left: 0;
  right: auto;
  margin: auto;
  padding: 0.5em 1em;
  background: #fff;
  transform: translateY(-50%);
  border-radius: 0 5px 5px 0;
  font-size: 0.875rem;
  font-weight: 700;
`;

const AlbumTile = (props: any) => {
  return (
    <StyledAlbumTile>
      <Link
        to={{
          pathname: `/album/${props.id}`
        }}
      >
        <img src={props.coverUrl} />
        <StyledAlbumName>{`${props.size} photos`}</StyledAlbumName>
        <figcaption>{props.id}</figcaption>
      </Link>
    </StyledAlbumTile>
  );
};

export default AlbumTile;
