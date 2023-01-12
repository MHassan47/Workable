import { gql } from "@apollo/client";

export const GET_ALL_JOBS = gql`
  query {
    allJobs {
      id
      company
      title
      description
      salaryMinimum
      salaryMaximum
      location
    }
  }
`;
