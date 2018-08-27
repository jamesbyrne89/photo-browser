import MaterialIcon from 'material-icons-react';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PageHeader from './PageHeader';

const StyledImageContainer = styled.figure`
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding: 0;
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
    padding: 0.5em 1em;
    width: 100%;
    display: flex;
  }
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0 2px 2px 0 rgba(60, 64, 67, 0.08),
      0 2px 6px 2px rgba(60, 64, 67, 0.16);
  }
`;

const ImageView = (props: any) => {
  const handleToggleFavourite = () => {
    const details = {
      url: myPhoto[0].url,
      albumId: myPhoto[0].albumId,
      id: myPhoto[0].id,
      thumbnailUrl: myPhoto[0].thumbnailUrl,
      title: myPhoto[0].title
    };
    props.toggleFavourite(details);
  };

  const isFavourite = (target: any) =>
    props.favourites.filter(
      (photo: any) => photo.albumId === target.albumId && photo.id === target.id
    ).length > 0;

  const { params } = props.match;
  const myPhoto = props.photos.filter(
    (photo: any) =>
      photo.albumId === parseInt(params.album, 0) &&
      photo.id === parseInt(params.id, 0)
  );
  if (myPhoto.length === 0) {
    return <Redirect to="/not-found" />;
  } else {
    return (
      <React.Fragment>
        <PageHeader title={myPhoto[0].id} history={props.history} />
        <StyledImageContainer>
          <img src={myPhoto[0].url} />
          <span>
            <button onClick={handleToggleFavourite}>
              <MaterialIcon
                icon={isFavourite(myPhoto[0]) ? 'favorite' : 'favorite_outline'}
                style={{ cursor: 'pointer' }}
              />
            </button>
          </span>
        </StyledImageContainer>
      </React.Fragment>
    );
  }
};

export default ImageView;
