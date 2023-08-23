import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Card, Button } from "semantic-ui-react";
import { QUERY_SPONSOR } from "../../Utils/queries";
import { DELETE_SKATE } from "../../Utils/mutations";
import { Link } from "react-router-dom";
import "../Styles/profile.css";

export default function Profile() {
  const { loading, data, refetch } = useQuery(QUERY_SPONSOR);
  const [deleteSkateSpot, { error }] = useMutation(DELETE_SKATE, {
    refetchQueries: [
      {
        query: QUERY_SPONSOR,
        awaitRefetchQueries: true,
      },
    ],
  });

  const user = data?.user || {};

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await deleteSkateSpot({
        variables: { skateSpotId: e.currentTarget.dataset.id },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {loading ? (
        <h3 className="loading1">Setting Up Your Profile...</h3>
      ) : (
        <div>
          <h2 className="welcoming">Welcome {user.username}</h2>
          {user.skateSpot.map((use) => (
            <Card.Group className="centered" itemsPerRow={2} key={use._id}>
              <Card
                style={{
                  backgroundColor: "#643c38",
                  borderRadius: "80px",
                  marginTop: "40px",
                }}
              >
                <Card.Content>
                  <Card.Header>{use.name}</Card.Header>
                  <Card.Description>{use.location}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <Link to={`/skateSpots/${use._id}`}>
                      <Button
                        style={{
                          backgroundColor: "green",
                          marginRight: "10px",
                        }}
                      >
                        See more
                      </Button>
                    </Link>
                    <Button
                      style={{ backgroundColor: "red" }}
                      data-id={use._id}
                      onClick={handleDelete}
                    >
                      Break
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          ))}
        </div>
      )}
    </div>
  );
}
