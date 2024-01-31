import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Nav";
import Profile from "../src/components/UserProfile/UserProfile";
import HomePage from "./pages/homePage";
import NewSkateSpot from "./pages/New";
import Login from "./pages/Login";
import Sign from "./pages/Signup";
import SingleSkate from "./components/Singleskate/Single";
import AdSpace from "./components/Map/Map";
import Footer from "./components/Messaging/footer";
import Articles from "./pages/Articles";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Navbar />
        <AdSpace />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/articles"} element={<Articles/>} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/skateSpots/:skateSpotId"} element={<SingleSkate />} />
          <Route path={"/newspot"} element={<NewSkateSpot />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/resources"} element={<Sign />} />
          <Route path={"*"} element={<h1>Nothing here</h1>} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
