import React, { useState } from "react";
import { emailAuth, userAuth } from "../Utils/helper";
import { useMutation } from "@apollo/client";
import { Card } from "semantic-ui-react";
import "../components/Styles/sign.css";
import { QUERY_SPONSOR } from "../Utils/queries";
import { useQuery } from "@apollo/client";

export default function SignUpPage() {
  /*const [signupForm, setSignupForm] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [wrongThree, setWrongThree] = useState("");
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      emailAuth(signupForm.email) &&
      userAuth(signupForm.username) &&
      signupForm.password
    ) {
      console.log(signupForm);
      console.log("New User made successfully!!");
      try {
        const { data } = await addUser({
          variables: { ...signupForm },
        });
        Author.login(data.addUser.token);
      } catch (error) {
        console.error(error);
        setWrongThree("something went wrong");
      }
    } else {
      setWrongThree(
        "your email or username may not be valid, email must be lowercase"
      );
    }
  }; */
    const { loading, data } = useQuery(QUERY_SPONSOR);
    const sponsor = data?.sponsorSchema || [];
  return (
    <>
      <div>
        <h2 className="join">A Special Thanks to Our Sponsors</h2>
        <p className="high">
          If you would like to be apart of this, please contact us
        </p>
      </div>
      <div className="card-container">
            <Card.Group className="centered" itemsPerRow={3} key={sponsor.id}>
              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  
                }}
              >
                <Card.Content>
                  <a href="https://tri-c.edu/veterans/">
                  <img className="sponsorimage" alt="tri-c" src={require("../components/Map/tri-c.jpg")} />
                  <Card.Header>Cuyahoga Community College</Card.Header>
                  <Card.Description>Connecting Veterans to Further their Education</Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                }}
              >
                <Card.Content>
                  <a href="https://jvcocc.org/">
                  <img className="sponsorimage" alt="tri-c" src={require("../components/Map/JVCOCC.png")} />
                  <Card.Header>Joint Veterans Council</Card.Header>
                  <Card.Description>Unifying Veterans and Veterans Organizations to Accomplish Common Goals</Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  
                }}
              >
                <Card.Content>
                  <a href="https://cuyahogavets.org">
                  <img className="sponsorimage" alt="tri-c" src={require("../components/Map/VSC-logo.png")} />
                  <Card.Header>The Veterans Service Commission</Card.Header>
                  <Card.Description>Provide world class advocacy, assistance, and support to Veterans and their families</Card.Description>
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
        </div>
    </>
  );
}
