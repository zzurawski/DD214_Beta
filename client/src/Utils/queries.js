import { gql } from "@apollo/client";

export const QUERY_SPONSOR = gql`
  query sponsor {
    sponsor {
      _id
      name
      link
      image
    }
  }
`;
// prettier-ignore
export const QUERY_ARTICLES = gql`
  query articles {
    articleSchema {
      _id
      title
      author
      body
    }
  }
`;
// prettier-ignore
export const QUERY_ARTICLE = gql`
  query article($articleId: ID!) {
    article(articleId: $articleId) {
      _id
      title
      author
      body
    }
  }
`;
