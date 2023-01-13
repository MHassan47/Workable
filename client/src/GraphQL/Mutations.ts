import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user
      accessToken
    }
  }
`;

export const REGISTER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    )
  }
`;

export const SAVEJOB = gql`
  mutation saveJobPost($jobId: number) {
    saveJobPost(jobId: $jobId)
  }
`;
