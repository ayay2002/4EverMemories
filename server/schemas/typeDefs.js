const typeDefs = `
type Photographer {
    photographerId: ID!
    name: String!
    email: String
    image: String
}

type User {
    userId: ID!
    name: String!
    email: String
    photographers: [Photographer]
}

type Album {
    albumId: ID!
    title: String!
    author: [Photographer]
    image:[String]
    viewers: [User]
}

input AlbumInput {
    authors: String
    image: [String]
    albumId: String!
    viewers[User]
}

type Query {
    photographers: [Photographer]!
    photographer(photographerId: ID!): Photographer
    users: [User]!
    user(userId: ID!): User
    albums: [Album]!
    album(album: ID!): Album 
}

type UserMutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addPhotographer(name: String!, image: String!): User
    removePhotographer(photographerId: ID!): User
}

type PhotographerMutation {
    login(email: String!, password: String!): Auth
    addPhotographer(name: String!, email: String!, password: String!, image: String!): Auth
    addAlbum(albumData: AlbumInput!): Photographer
    removeAlbum(albumId: ID!): Photographer
}
`;

module.exports = typeDefs;
