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
  mutation saveJobPost($jobId: Float!) {
    saveJobPost(jobId: $jobId)
  }
`;

export const CREATE_JOB = gql`
  mutation CreateJob(
    $company: String!
    $title: String!
    $description: String!
    $salaryMinimum: Int!
    $salaryMaximum: Int!
    $location: String!
  ) {
    createJob(
      company: $company
      title: $title
      description: $description
      salaryMinimum: $salaryMinimum
      salaryMaximum: $salaryMaximum
      location: $location
    )
  }
`;
