import { gql } from "@apollo/client";

// All mutations for users
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
      }
    }
  }
`;

export const REMOVE_PHOTOGRAPHER = gql`
  mutation RemovePhotographer($photographerId: ID!) {
    removePhotographer(photographerId: $photographerId) {
      _id
      name
    }
  }
`;
// All mutations for photographer
export const ADD_PHOTOGRAPHER = gql`
  mutation AddPhotographer(
    $name: String!
    $email: String!
    $password: String!
    $image: String!
  ) {
    addPhotographer(
      name: $name
      email: $email
      password: $password
      image: $image
    ) {
      token
      photographer {
        _id
        name
        image
      }
    }
  }
`;

export const ADD_PHOTOGRAPHER_PROFILE = gql`
  mutation AddPhotographerProfile($name: String!, $image: String!) {
    addPhotographerProfile(name: $name, image: $image) {
      photographers {
        _id
        name
        image
      }
    }
  }
`;

export const PHOTOGRAPHER_LOGIN = gql`
  mutation PhotographerLogin($email: String!, $password: String!) {
    photographerLogin(email: $email, password: $password) {
      token
      photographer {
        _id
        name
        image
      }
    }
  }
`;
//All mutations for albums
export const ADD_ALBUM = gql`
  mutation AddAlbum($albumData: AlbumInput!) {
    addAlbum(albumData: $albumData) {
      _id
      name
      image
    }
  }
`;

export const REMOVE_ALBUM = gql`
  mutation RemoveAlbum($albumId: ID!) {
    removeAlbum(albumId: $albumId) {
      _id
      name
      image
  }
`;
