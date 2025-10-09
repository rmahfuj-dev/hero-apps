import React from "react";
import Container from "../../layouts/Container";
import errorImg from "../../assets/images/error-404.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Container>
        <div className="wrapper flex items-center h-[100vh] justify-center">
          <div className="secendary-wrapper flex flex-col items-center justify-center gap-5">
            <img src={errorImg} alt="" />
            <Link to="/" className="bg-[linear-gradient(to_bottom_right,_#632EE3_0%,_#9F62F2_100%)] text-white px-10 py-2 flex justify-center items-center rounded-md font-bold text-xl">
              Go Back
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Error;
