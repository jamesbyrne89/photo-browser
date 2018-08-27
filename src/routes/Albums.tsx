import * as React from 'react';
import AlbumGrid from '../components/AlbumGrid';
import PageHeader from '../components/PageHeader';

const Albums = (props: any) => {
  return (
    <div>
      <PageHeader title="Albums" history={props.history} />
      <AlbumGrid albums={props.albums} {...props} />
    </div>
  );
};

export default Albums;
