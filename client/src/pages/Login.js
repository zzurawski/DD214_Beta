import React from "react";
//import { useMutation } from "@apollo/client";
//import { LOGIN } from "../Utils/mutations";
//import { Form, Button } from "semantic-ui-react";
import "../components/Styles/login.css";
//import Author from "../Utils/auth";

export default function Login() {
  /*const [loginInf, setLogin] = useState({
    email: "",
    password: "",
  });
  const [wrongOne, setWrongOne] = useState("");

  const [login, { error }] = useMutation(LOGIN);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...loginInf, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...loginInf },
      });
      if (data) {
        Author.login(data.login.token);
      }
    } catch (error) {
      console.error(error);
      setWrongOne("something is wrong");
    }

    console.log("Email:", loginInf.email, "Password:", loginInf.password);
  };*/

  return (
    <div>
      <h2 className="login1">About Us</h2>
      <div className="about1">
        <p className="about2">DD 214 Chronicle is a bimonthly newspaper created in 2010 for northeast Ohio veterans. Our press run of 11,000 copies is delivered without charge to VFW and American Legion posts, health care facilities including the VA hospitals, more than 80 libraries, colleges with veteran programs, among other stops.</p>
      </div>
      
    </div>
  );
}
