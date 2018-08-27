import axios from 'axios';
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import AlbumView from './components/AlbumView';
import ImageView from './components/ImageView';
import Navigation from './components/Navigation';
import { ENDPOINT, styles } from './constants';
import Albums from './routes/Albums';

import AllPhotos from './routes/AllPhotos';
import Error from './routes/Error';
import Favourites from './routes/Favourites';
import Welcome from './routes/Welcome';

const history = createHistory();

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  min-height: 100vh;
  background: ${styles.grey_two};
  color: ${styles.grey_three};
  font-family: ${styles.primary_font};
  max-height: 100vh;
  @media (max-width: 1025px) {
    grid-template-columns: 100%;
    max-height: unset;
  }
  * {
    box-sizing: border-box;
  }
`;

export const StyledMainContent = styled.section`
  max-height: 100vh;
  overflow: auto;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1025px) {
    max-height: unset;
  }
`;

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      photos: [],
      favourites: [],
      albums: [],
      currentPage: 1
    };
  }

  public fetchPhotos = () => {
    axios
      .get(ENDPOINT)
      .then(res => {
        this.setState({ photos: res.data, albums: this.getAlbums(res.data) });
      })
      .catch(err => err);
  };

  public getAlbums = (photos: []) => {
    const reduced = photos.reduce((all: any, curr: any) => {
      if (!all.includes(curr.albumId)) {
        return all.concat(curr.albumId);
      }
      return all;
    }, []);
    return reduced;
  };

  public cacheFavourites = (photos: []) => {
    localStorage.setItem('favourites', JSON.stringify(photos));
  };

  public toggleFavourite = (photo: any) => {
    const { favourites } = this.state;
    const isFavourite =
      favourites.filter(
        (favourite: any) =>
          favourite.id === photo.id && favourite.albumId === photo.albumId
      ).length > 0;
    if (!isFavourite) {
      this.setState({ favourites: [...favourites, ...photo] }, () => {
        localStorage.setItem(
          'favourites',
          JSON.stringify(this.state.favourites)
        );
      });
    } else {
      const filtered = favourites.filter(
        (favourite: any) =>
          favourite.id !== photo.id || favourite.albumId !== photo.albumId
      );
      this.setState({ favourites: [...filtered] }, () => {
        localStorage.setItem(
          'favourites',
          JSON.stringify(this.state.favourites)
        );
      });
    }
  };

  public getFavourites = () => {
    const savedFavourites = JSON.parse(
      localStorage.getItem('favourites') || ''
    );
    if (savedFavourites !== '') {
      this.setState({ favourites: savedFavourites });
    }
  };

  componentDidMount() {
    this.fetchPhotos();
    this.getFavourites();
  }

  public render() {
    return (
      <Router>
        <StyledApp>
          <Navigation />
          <StyledMainContent>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route
                path="/all-photos/:page?"
                render={props => (
                  <AllPhotos
                    photos={this.state.photos}
                    currentPage={this.state.currentPage}
                    toggleFavourite={this.toggleFavourite}
                    page={history.location.state && history.location.state.page}
                    favourites={this.state.favourites}
                    {...props}
                  />
                )}
              />
              <Route
                path="/albums/:page?"
                render={props => (
                  <Albums
                    photos={this.state.photos}
                    currentPage={this.state.currentPage}
                    toggleFavourite={this.toggleFavourite}
                    favourites={this.state.favourites}
                    albums={this.state.albums}
                    {...props}
                  />
                )}
              />
              <Route
                path="/album/:id"
                render={props => (
                  <AlbumView
                    photos={this.state.photos}
                    currentPage={this.state.currentPage}
                    toggleFavourite={this.toggleFavourite}
                    favourites={this.state.favourites}
                    {...props}
                  />
                )}
              />
              <Route
                path="/favourites"
                render={props => (
                  <Favourites
                    photos={this.state.photos}
                    currentPage={this.state.currentPage}
                    toggleFavourite={this.toggleFavourite}
                    favourites={this.state.favourites}
                    {...props}
                  />
                )}
              />
              <Route
                path="/img/:album/:id"
                render={props => (
                  <ImageView
                    photos={this.state.photos}
                    currentPage={this.state.currentPage}
                    toggleFavourite={this.toggleFavourite}
                    favourites={this.state.favourites}
                    {...props}
                  />
                )}
              />

              <Route component={Error} />
            </Switch>
          </StyledMainContent>
        </StyledApp>
      </Router>
    );
  }
}

export default App;
