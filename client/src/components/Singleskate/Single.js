import React from "react";
import { Card } from "semantic-ui-react";
import { QUERY_ARTICLE } from "../../Utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "../Styles/single.css";

export default function SingleArticle() {
  let { articleId } = useParams();
  const { loading, data } = useQuery(QUERY_ARTICLE, {
    variables: { articleId: articleId },
  });

  const article = data?.article || {};

  return (
    <>
      <div id="single">
        {loading ? (
          <h3 className="loading3">Loading the article...</h3>
        ) : (
          <div style={{ padding: "30px" }}>
            <Card id="card">
              <Card.Content id="name" header={article.title} />
              <Card.Content>{article.author}</Card.Content>
              <Card.Content>{article.body}</Card.Content>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
