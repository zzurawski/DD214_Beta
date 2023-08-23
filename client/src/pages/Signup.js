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
            <Card.Group className="centered" itemsPerRow={2} key={sponsor.id}>
              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                }}
              >
                <Card.Content>
                  <Card.Header>Cuyahoga Community College</Card.Header>
                  <Card.Description>image here</Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
        </div>
    </>
  );
}
