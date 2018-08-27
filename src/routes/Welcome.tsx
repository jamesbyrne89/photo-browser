import * as React from 'react';
import styled from 'styled-components';

const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h2 {
    font-size: 2em;
  }
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      <h2>Welcome!</h2>
      <p>Choose an option from the menu.</p>
    </StyledWelcome>
  );
};

export default Welcome;
