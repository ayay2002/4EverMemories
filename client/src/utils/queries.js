import { gql } from "@/apollo/client";

export const QUERY_USER = gql`
  {
    users {
      _id
      email
      name
      photographers {
        _id
        email
        image
        name
      }
    }
  }
`;

export const QUERY_PHOTOGRAPHER = gql`
  {
    photographers {
      _id
      name
      email
      image
      albums {
        title
        image
        viewers {
          _id
          name
          email
        }
      }
    }
  }
`;
