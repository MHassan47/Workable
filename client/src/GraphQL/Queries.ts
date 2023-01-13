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

export const SEARCHJOBS = gql`
  query SearchJobs($searchTerm: String!) {
    searchJobs(searchTerm: $searchTerm) {
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
