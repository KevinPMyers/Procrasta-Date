const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        dates: [Date]
    }

    type MyDate {
        _id: ID
        createdAt: String
        username: Schema.Types.ObjectId
        recipes: [Recipe]
        music: [Music]
    }

    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        dates(username: Schema.Types.ObjectId): [Date]
        date(_id: ID!): Date
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addDate(datename: String!): Date
    }
`;


module.exports = typeDefs;