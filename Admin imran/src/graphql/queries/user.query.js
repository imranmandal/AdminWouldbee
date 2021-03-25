import { gql } from "@apollo/client";

// export const GET_ALL_USERS = gql`
// {
//     allUsers(
//     filter: $filter
//     sortOrder: $sortOrder
//     sortField: $sortField
//     perPage: $perPage
//     page: $page
//   ) {
//     id
//     createdOn
//     email
//     phone
//   }
// }
// `

export const GET_ALL_USERS = gql`
  query Users($search: String!) {
    userList(options: { q: $search }) {
      values {
        id
        createdOn
        email
        phone
      }
    }
  }
`;

export const GET_THE_USER = gql`
  query User($id: String!) {
    user(id: $id) {
      phone
      email
      profile {
        lastName
        firstName
        gender
        motherTongue
        maritalStatus
        profileManagedBy
        partnerPreference {
          ageRange
          heightRange
          weightRange
          religions
          castes {
            name
          }
          subCastes {
            name
          }
          leaveSelfGotra
          leaveMothersGotra
          diets
          smoke
          degrees
          occupations
          incomeRange
        }
        isApproved
        city {
          name
          state {
            name
            stateCode
            country {
              name
            }
          }
        }
        pictures {
          id
          signedDownloadUrl
        }
        familyDetails {
          fathersStatus
          aboutFamily
        }
        bio {
          bio
          isApproved
        }
      }
    }
  }
`;

export const GET_PROFILES = gql`
  query Profile(
    $search: String
    $start: DateTime!
    $end: DateTime!
    $skip: Int!
    $take: Int!
    $gender: Gender
    $isApproved: Boolean
  ) {
    profileList(
      options: {
        q: $search
        skip: $skip
        take: $take
        gender: $gender
        isApproved: $isApproved
        createdOn: { gt: $start, lt: $end }
      }
    ) {
      count
      values {
        id
        firstName
        lastName
        gender
        dob
        maritalStatus
        createdOn
        motherTongue
        isApproved
      }
    }
  }
`;

// --------- MUTATIONS -----

export const APPROVE_PROFILE = gql`
  mutation ApproveProfileBio($id: String!, $isApproved: Boolean!) {
    approveProfile(idProofApprovalInput: { id: $id, isApproved: $isApproved }) {
      bio {
        bio
      }
      isApproved
    }
  }
`;

export const DIS_APPROVE_PROFILE = gql`
  mutation ApproveProfileBio($isApproved: Boolean!, $id: String!) {
    approveProfile(
      idProofApprovalInput: {
        id: $id
        isApproved: $isApproved
        rejectionReason: Other
      }
    ) {
      bio 
      isApproved
    }
  }
`;


// ---- BIO APPROVAL

export const APPROVE_BIO =gql`
  mutation ApproveBio($id: String!, $isApproved: Boolean!){
    approveBio(bioApprovalInput: {
      id: $id
      isApproved: $isApproved
    }){
      bio
      isApproved
    }
  }
`

export const DIS_APPROVE_BIO =gql`
mutation DisapproveBio($id: String!, $isApproved: Boolean!, $reason: TextRejectionReason!){
  approveBio(bioApprovalInput: {
    id: $id
    isApproved: $isApproved
    rejectionReason: $reason
  }){
    bio
    isApproved
  }
}
`
