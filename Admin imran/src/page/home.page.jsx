import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../context/auth.context";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SideNav from "../components/side-nav-bar";

const HomePage = () => {
  const { authState, dispatch } = useContext(AuthContext);
  const handleClick = () => {
    console.log("logout clicked");
    dispatch({
      type: "LOG_OUT",
    });
  };

  return (
    <>
      <div className="container m-5">
        <h1> Home Page </h1>
        <h4>Auth State: {authState.accessToken}</h4>
        <Button
          variant="primary"
          disabled={!authState.accessToken}
          onClick={handleClick}
        >
          Logout
        </Button>
        {/* <SideNav /> */}
      </div>
    </>
  );
};

export default HomePage;
