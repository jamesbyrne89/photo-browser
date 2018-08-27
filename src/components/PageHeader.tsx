import MaterialIcon from 'material-icons-react';
import * as React from 'react';
import styled from 'styled-components';
import { styles } from '../constants';

const StyledPageHeader = styled.header`
  width: 90%;
  margin: 50px auto 1em;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 667px) {
    margin: 1rem auto;
  }
`;

const StyledPageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 7500;
  margin: 0;
  @media (max-width: 667px) {
    font-size: 1rem;
  }
`;

const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  color: ${styles.light_blue};
  font-weight: 700;
  margin: 0;
  border-radius: 10px 0;
  user-select: none;
  cursor: pointer;
  font-size: 1.5rem;
  @media (max-width: 667px) {
    font-size: 1rem;
  }
  i {
    font-size: 0.875em !important;
    line-height: 2em;
    color: inherit !important;
    margin-right: 0.25em;
  }
`;

const PageHeader = (props: any) => (
  <StyledPageHeader>
    <StyledPageTitle>{props.title}</StyledPageTitle>
    <StyledBackButton
      onClick={e => {
        e.stopPropagation();
        props.history.goBack();
      }}
    >
      <MaterialIcon icon="arrow_back_ios" style={{ marginRight: '0.5em' }} />
      Back
    </StyledBackButton>
  </StyledPageHeader>
);

export default PageHeader;
