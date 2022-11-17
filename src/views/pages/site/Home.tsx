import React from "react";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__logo">
        <img src={logo} alt="Yandex Logo" />
      </div>

      <div className="home__text">
        <h3>Welcome to the website!</h3>
        <p>
          You can use it to store your files. To do this, use the demo login and
          password data. Or go through a simple registration.
        </p>

        <h3>Demo data</h3>

        <p>
          Email: <strong>demo@site.su</strong>
        </p>
        <p>
          Password: <strong>password</strong>
        </p>
      </div>

      <div className="home__buttons">
        <Link to="/auth" className="btn btn_default">
          Log In
        </Link>

        <Link to="/auth/register" className="btn btn_black">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
