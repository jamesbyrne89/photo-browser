import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../constants';

const StyledErrorContainer = styled.div`
  margin: auto;
  display: inline-block;
  text-align: center;
`;

const Styled404 = styled.h2`
  text-align: center;
  font-size: 5rem;
  font-weight: 700;
  margin: 0;
`;

const StyledErrorDetails = styled.p`
  padding: 1em;
  background: #fff;
  font-size: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
`;

const StyledHomeButton = styled.button`
  color: #fff;
  line-height: 2.75;
  border-radius: 10px 0;
  background: ${styles.mid_blue};
  font-size: 1rem;
  padding: 0 2em;
  font-weight: 400;
  font-family: inherit;
  cursor: pointer;
  margin: auto;
  margin-top: 1.5rem;
  transition: all 0.1s ease-out;
  &:hover,
  &:focus {
    transform: translateY(-1px);
    box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
      0 1px 3px 1px rgba(60, 64, 67, 0.16);
  }
`;

const Error = () => {
  return (
    <StyledErrorContainer>
      <Styled404>404</Styled404>
      <StyledErrorDetails>
        Sorry, we couldn't find that page.
      </StyledErrorDetails>
      <Link to="/">
        <StyledHomeButton>Home</StyledHomeButton>
      </Link>
    </StyledErrorContainer>
  );
};

export default Error;
