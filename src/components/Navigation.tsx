import MaterialIcon from 'material-icons-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../constants';

const StyledNavigation = styled.nav`
  background: #fff;
  padding: 1em;
  height: 100%;
`;

const StyledAppTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: ${styles.mid_blue};
  margin: 0;
`;

const StyledNavTitle = styled.h2`
  font-weight: normal;
  color: ${styles.light_blue};
  margin-top: 3rem;
  @media (max-width: 1025px) {
    margin-top: 1rem;
  }
  @media (max-width: 667px) {
    font-size: 1rem;
  }
`;

const StyledNavLinks = styled.ul`
  list-style: none;
  padding: 0;
  @media (max-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (max-width: 667px) {
    grid-template-columns: 12em;
  }
  a {
    color: ${styles.grey_four};
    text-decoration: none;
    line-height: 1.75;
  }

  li {
    margin-top: 1rem;
    background: ${styles.grey_one};
    padding: 0.5em 1em;
    font-weight: 700;
    display: flex;
    border-radius: 3px;
    transition: all 0.1s ease-out;
    @media (max-width: 1025px) {
      margin-top: 0.5rem;
    }
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
        0 1px 3px 1px rgba(60, 64, 67, 0.16);
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledAppTitle>Photo Browser</StyledAppTitle>
      <StyledNavTitle>Library</StyledNavTitle>
      <StyledNavLinks>
        <Link to="/all-photos/1">
          <li>
            <MaterialIcon
              icon="photo_library"
              style={{ marginRight: '0.5em' }}
            />
            <span>All Photos</span>
          </li>
        </Link>
        <Link to="/albums/1">
          <li>
            <MaterialIcon icon="photo_album" style={{ marginRight: '0.5em' }} />
            <span>Albums</span>
          </li>
        </Link>
        <Link to="/favourites">
          <li>
            <MaterialIcon icon="favorite" style={{ marginRight: '0.5em' }} />
            <span>Favourites</span>
          </li>
        </Link>
      </StyledNavLinks>
    </StyledNavigation>
  );
};

export default Navigation;
