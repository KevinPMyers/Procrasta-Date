const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        dates: [MyDate]
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
        dates(username: Schema.Types.ObjectId): [MyDate]
        date(_id: ID!): MyDate
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addDate(datename: String!): MyDate
    }
`;


module.exports = typeDefs;