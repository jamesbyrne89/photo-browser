import MaterialIcon from 'material-icons-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styles } from '../constants';

const StyledPagination = styled.div`
  margin: 50px auto 20px;
  text-align: center;
`;

const StyledPageNumber = styled.span`
  display: inline-block;
  color: ${styles.light_blue};
  font-weight: 700;
  margin: 0 2rem;
  border-radius: 10px 0;
  user-select: none;
  cursor: pointer;
  i {
    font-size: 0.875em !important;
    margin-top: 0.25em;
    color: inherit !important;
  }
`;

const Pagination = (props: any) => {
  return (
    <StyledPagination>
      {parseInt(props.match.params.page, 0) > 1 && (
        <Link
          to={{
            pathname: `/${props.slug}/${parseInt(props.match.params.page, 0) -
              1}`,
            state: 'prev'
          }}
        >
          <StyledPageNumber>
            <MaterialIcon
              icon="arrow_back_ios"
              style={{ marginRight: '0.5em' }}
            />
            Prev
          </StyledPageNumber>
        </Link>
      )}
      <Link
        to={{
          pathname: `/${props.slug}/${parseInt(props.match.params.page, 0) +
            1}`,
          state: 'next'
        }}
      >
        <StyledPageNumber>
          Next
          <MaterialIcon
            icon="arrow_forward_ios"
            style={{ marginLeft: '0.5em' }}
          />
        </StyledPageNumber>
      </Link>
    </StyledPagination>
  );
};

export default Pagination;
