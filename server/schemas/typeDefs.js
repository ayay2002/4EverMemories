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
type Query {
photographer(photographerId: ID): Photographer 
}
`;

module.exports = typeDefs;
