import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import PrivateRoute from "./components/private-route";
import { AuthContext } from "./context/auth.context";
import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  split,
  getMainDefinition,
  HttpLink,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";

import LoginPage from "./page/login.page";
import HomePage from "./page/home.page";
import Dashboard from "./page/dashboard.page";
import Userboard from "./components/Profiles/User.profile";
import TopNavBar from "./components/top-nav-bar";
import SideNav from "./components/side-nav-bar";
import Profile from "./page/user.profile";

const App = () => {
  const {
    authState: { accessToken },
  } = useContext(AuthContext);

  // 1. create websocket link
  // const wsLink = new WebSocketLink({
  //       uri: process.env.REACT_APP_GRAPHQL_WS_ENDPOINT,
  //       options: {
  //           reconnect: true
  //       }
  //   });

  // 2. create http link
  const httpLink = new HttpLink({
    uri: "https://3b0fe2a0fb02.in.ngrok.io/graphql",
  });

  // 3. setContext for accessToken
  const authLink = setContext(() => {
    return {
      headers: {
        Authorization: `Bearer ${accessToken ? accessToken : ""}`,
      },
    };
  });

  // const authLink = setContext((request, previousContext) => ({
  //   headers: {authorization: "1234"}
  // }));

  // 4. concat http and accessToken link
  const httpAuthLink = authLink.concat(httpLink);

  // 5. use split to split http link or websocket link
  // const link = split(
  //     ({ query }) => {
  //         // split link based on operation type
  //         const definition = getMainDefinition(query);
  //         return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  //     },
  //     wsLink,
  //     httpAuthLink
  // );

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    // link
    link: httpAuthLink,
  });

  return (
    <ApolloProvider client={client}>
      <ToastContainer />

      <Router>
        <TopNavBar />

        <Switch>
          <div className="content-body d-flex">
            <SideNav />
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/dash" component={Dashboard} />
            <PrivateRoute exact path="/dash/user-profile" component={Userboard} />
            <PrivateRoute exact path="/profiles" component={Profile} />
            <PrivateRoute exact path="/profiles/user-profile" component={Userboard} />
            <PrivateRoute exact path="/login" component={LoginPage} />
          </div>

          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
