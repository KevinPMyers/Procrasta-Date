import gql from 'graphql-tag';


export const QUERY_DATES = gql`
    query dates($username: String) {
        dates(username: $username) {
            _id
            datename
            createdAt
            recipes {
                name
                ingredients
                instructions
            }
            music
        }
    }
`;