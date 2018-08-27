import axios from 'axios';
import * as React from 'react';
import PageHeader from '../components/PageHeader';
import Pagination from '../components/Pagination';
import PhotoGrid from '../components/PhotoGrid';
import PhotoTile from '../components/PhotoTile';
import { ENDPOINT } from '../constants';

class AllPhotos extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      photos: []
    };
  }

  fetchPhotos = (page = 1) => {
    axios
      .get(ENDPOINT, {
        params: {
          _page: page
        }
      })
      .then(res => {
        this.setState({ photos: res.data });
      })
      .catch(err => err);
  };

  componentDidMount() {
    const { page } = this.props.match.params;
    this.fetchPhotos(page);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    const { page } = this.props.match.params;
    if (page && page.toString() !== prevProps.match.params.page) {
      this.fetchPhotos(page);
    }
  }

  render() {
    const isFavourite = (target: any) =>
      this.props.favourites.filter(
        (photo: any) =>
          photo.albumId === target.albumId && photo.id === target.id
      ).length > 0;

    return (
      <React.Fragment>
        <PageHeader title="All Photos" history={this.props.history} />
        <PhotoGrid
          photos={this.state.photos}
          favourites={this.props.favourites}
        >
          {this.state.photos.map((photo: any) => (
            <PhotoTile
              key={photo.id}
              url={photo.url}
              albumId={photo.albumId}
              id={photo.id}
              thumbnailUrl={photo.thumbnailUrl}
              title={photo.title}
              toggleFavourite={this.props.toggleFavourite}
              isFavourite={isFavourite(photo)}
            />
          ))}
        </PhotoGrid>
        <Pagination slug="all-photos" {...this.props} />
      </React.Fragment>
    );
  }
}

export default AllPhotos;
