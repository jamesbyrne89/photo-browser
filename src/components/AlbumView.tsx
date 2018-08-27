import * as React from 'react';
import PageHeader from './PageHeader';
import StyledPhotoGrid from './PhotoGrid';
import PhotoTile from './PhotoTile';

const AlbumView = (props: any) => {
  const isFavourite = (target: any) =>
    props.favourites.filter(
      (photo: any) => photo.albumId === target.albumId && photo.id === target.id
    ).length > 0;
  return (
    <div>
      <PageHeader title={props.match.params.id} history={props.history} />
      <StyledPhotoGrid>
        {props.photos
          .filter(
            (photo: any) => photo.albumId === parseInt(props.match.params.id, 0)
          )
          .map((photo: any) => (
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
    </div>
  );
};

export default AlbumView;
