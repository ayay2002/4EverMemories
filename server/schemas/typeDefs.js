const typeDefs = `
type Photographer {
    _id: ID!
    name: String!
    email: String
    image: String
    albums: [Album]
}

type User {
    _id: ID!
    name: String!
    email: String
    photographers: [Photographer]
}

type Album {
    _id: ID!
    title: String!
    author: [Photographer]
    image:[String]
    viewers: [User]
}

input AlbumInput {
    authors: String
    image: [String]
    albumId: String!

}

type Auth {
    token: ID!
    photographer: Photographer
    user: User

}

type Query {
    photographers: Photographer
    users: User
}

type Mutation {
    userLogin(email: String!, password: String!): Auth
    photographerLogin(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addPhotographerProfile(name: String!, image: String!): User
    removePhotographer(photographerId: ID!): User
    addPhotographer(name: String!, email: String!, password: String!, image: String!): Auth
    addAlbum(albumData: AlbumInput!): Photographer
    removeAlbum(albumId: ID!): Photographer
}
`;

module.exports = typeDefs;
