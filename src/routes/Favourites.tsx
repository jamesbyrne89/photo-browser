import * as React from 'react';
import PageHeader from '../components/PageHeader';
import { StyledPhotoGrid } from '../components/PhotoGrid';
import PhotoTile from '../components/PhotoTile';

const Favourites = (props: any) => {
  const isFavourite = (target: any) =>
    props.favourites.filter(
      (photo: any) => photo.albumId === target.albumId && photo.id === target.id
    ).length > 0;
  return (
    <React.Fragment>
      <PageHeader title="Favourites" history={props.history} />
      <StyledPhotoGrid>
        {props.favourites.map((photo: any) => (
          <PhotoTile
            key={photo.id}
            url={photo.url}
            albumId={photo.albumId}
            id={photo.id}
            thumbnailUrl={photo.thumbnailUrl}
            title={photo.title}
            toggleFavourite={props.toggleFavourite}
            isFavourite={isFavourite(photo)}
          />
        ))}
      </StyledPhotoGrid>
    </React.Fragment>
  );
};

export default Favourites;
