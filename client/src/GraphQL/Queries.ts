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

export const SEARCH_JOBS = gql`
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

export const GET_SAVED_JOBS = gql`
  query {
    getAllSavedJobs {
      company
      title
      description
      salaryMinimum
      salaryMaximum
      location
    }
  }
`;
