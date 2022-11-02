import { gql } from "@apollo/client";

const INFO_BOOKS = gql`
  query {
    books {
        title
    }
  }
`;

export default INFO_BOOKS;