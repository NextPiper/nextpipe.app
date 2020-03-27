// Essential framework imports
import React from "react";

// Components imports
import LoginCard from "../../Components/Cards/LoginCard/LoginCard";

// Style imports
import localStyle from "./loginPage.css";

const LoginPage = () => {
  const images = [
    "/images/lock.jpg",
    "/images/login.jpg",
    "/images/register.jpg",
    "/images/login1.jpg"
  ];

  const getImg = () => {
    console.log(images);

    return images[Math.floor(Math.random() * (images.length - 0)) + 0];
  };

  return (
    <div className="container">
      <div className="containerContext">
        <div
          className="backgroundImage"
          style={{ backgroundImage: `url(${getImg()})` }}
        >
          <div className="loginContainer">
            <div className="loginContainerContext">
              <LoginCard></LoginCard>
            </div>
          </div>
        </div>
        <div className="backgroundImageOverlay"></div>
      </div>
    </div>
  );
};

export default LoginPage;

/*
<div className="loginGrid">
          <div className="box"></div>
        </div>


*/
