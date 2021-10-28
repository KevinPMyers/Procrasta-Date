import gql from 'graphql-tag';


export const GET_ME = gql`
{
     me {
         _id
         username
         email 
         savedDates {
             dateId
             datename
             createdAt
             recipes
             music


         }
     }
}
`;