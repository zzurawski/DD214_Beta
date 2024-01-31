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
        <h2 className="join">Those Who Support Our Veterans</h2>
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
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
                <Card.Content>
                  <a href="https://tri-c.edu/veterans/">
                  <img style={{
                    maxHeight: "200px"
                  }} className="sponsorimage" alt="tri-c" src={require("../components/Map/tri-c.jpg")} />
                  <Card.Header
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>Cuyahoga Community College</Card.Header>
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
                  fontSize: "large",
                }}
              >
                <Card.Content>
                  <a href="https://neopat.org">
                  <img style={{
                    maxHeight: "200px"
                  }} className="sponsorimage" alt="neopat" src={require("../components/Map/logo_neopat_oh_trans.png")} />
                  <Card.Header
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >NEOPAT
                  </Card.Header>
                  <Card.Description>We’re a non-profit, non-partisan, 501(c)(3) organization dedicated to promoting patriotism and remembering those we have lost fighting for our freedoms. </Card.Description>
                  </a>
                </Card.Content>
              </Card>
              
              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
                <Card.Content>
                  <a href="https://lorainccc.edu">
                  <img style={{
                    maxHeight: "200px"
                  }} className="sponsorimage" alt="LCCC" src={require("../components/Map/LCCC-Logo.jpg")} />
                  <Card.Header
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>Lorain County Community College</Card.Header>
                  <Card.Description>Enabling our Lorain County Veterans to Further their Education </Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
                <Card.Content className="card">
                  <a href="https://jvcocc.org/">
                  <img style={{
                    height: "100px",
                  }} className="sponsorimage" alt="tri-c" src={require("../components/Map/JVCOCC.png")} />
                  <Card.Header style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>Joint Veterans Council</Card.Header>
                  <Card.Description>Unifying Veterans and Veterans Organizations to Accomplish Common Goals</Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
                <Card.Content>
                  <a href="https://cuyahogavets.org">
                  <img style={{
                    backgroundColor: "white",
                    maxHeight: "200px",
                  }} className="sponsorimage" alt="cuyahoga VSC" src={require("../components/Map/VSC-logo.png")} />
                  <Card.Header style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>The Veterans Service Commission</Card.Header>
                  <Card.Description>Provide world class advocacy, assistance, and support to Veterans and their families</Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
              <Card.Content>
                  <a href="https://kent.edu">
                  <img style={{
                    backgroundColor: "white",
                    maxHeight: "200px",
                  }} className="sponsorimage" alt="ksu" src={require("../components/Map/KentStateUniversity.jpg")} />
                  <Card.Header style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>Kent State University</Card.Header>
                  <Card.Description>We welcome our military-connected students and families to use the vast resources on campus to enhance your experience at Kent State. </Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
              <Card.Content>
                  <a href="https://www.bw.edu/student-life/services/military-veteran-support/">
                  <img style={{
                    backgroundColor: "white",
                    maxHeight: "200px",
                  }} className="sponsorimage" alt="bwu" src={require("../components/Map/bwul.jpg")} />
                  <Card.Header style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>Baldwin Wallace University</Card.Header>
                  <Card.Description>Baldwin Wallace has assembled a Military and Veteran Support Team, with the goal of providing the necessary support in the areas of admission, financial aid, academic advising, career resources and certification of enrollment.</Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
              <Card.Content>
                  <a href="https://www.loraincountyveterans.com/">
                  <img style={{
                    backgroundColor: "white",
                    maxHeight: "200px",
                  }} className="sponsorimage" alt="lorain VSC" src={require("../components/Map/LC-Veterans-Logo2.png")} />
                  <Card.Header style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>Lorain County Veterans Service Commission</Card.Header>
                  <Card.Description>We are veterans, serving veterans, helping our community.</Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
              <Card.Content>
                  <a href="https://www.medinacountyveterans.org/">
                  <img style={{
                    backgroundColor: "white",
                    maxHeight: "200px",
                  }} className="sponsorimage" alt="medina VSC" src={require("../components/Map/Veterans-Services-Logo-Medina.png")} />
                  <Card.Header style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>Medina County Veterans Service Office</Card.Header>
                  <Card.Description>The Medina County Veterans Service Office has a mission to provide temporary aid and assistance to veterans, dependents and widows in time of need and provide assistance when submitting claims to the Department of Veterans Affairs (VA).</Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
              <Card.Content>
                  <a href="https://www.galluccisfinefoods.com/">
                  <img style={{
                    backgroundColor: "white",
                    maxHeight: "200px",
                  }} className="sponsorimage" alt="galuccis" src={require("../components/Map/galluccis-logo2.png")} />
                  <Card.Header style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>Galucci's</Card.Header>
                  <Card.Description>From the kitchen of Faeto, Italy to the heart of Danbury, Connecticut, the Gallucci family has been cooking high quality, homestyle foods for generations.</Card.Description>
                  </a>
                </Card.Content>
              </Card>

              <Card
                className="sponsorcard"
                style={{
                  borderRadius: "10px",
                  marginTop: "40px",
                  backgroundColor: "black",
                  fontSize: "large",
                }}
              >
              <Card.Content>
                  <a href="https://www.dominionenergy.com/">
                  <img style={{
                    backgroundColor: "white",
                    maxHeight: "200px",
                  }} className="sponsorimage" alt="dominion energy" src={require("../components/Map/Dominion_Energy_Logo.jpg")} />
                  <Card.Header style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    padding: "10px"
                  }}>Dominion Energy</Card.Header>
                  <Card.Description>We are a leader in the clean energy transition, with a clear strategy to achieve Net Zero carbon and methane emissions.</Card.Description>
                  </a>
                </Card.Content>
              </Card>


            </Card.Group>
        </div>
    </>
  );
}
