import { gql } from "apollo-boost";

export const GET_GROUPS = gql`
    {
        GetGroups @client
    }
`;

export const ADD_GROUP = gql`
    mutation addGroup(
        $groupName: String
        $email: String!
        $password: String!
        $checkedPDF: Boolean!
        $checkedSendEmail: Boolean!
        $checkedRESTFul: Boolean!
        ){
        AddGroup(
            groupName: $groupName
            email: $email
            password: $password
            checkedPDF: $checkedPDF
            checkedSendEmail: $checkedSendEmail
            checkedRESTFul: $checkedRESTFul
        ) @client
    }
`;

export const DELETE_GROUPS = gql`
    mutation deleteGroup($id: Int!) {
        DeleteGroup @client
    }
`