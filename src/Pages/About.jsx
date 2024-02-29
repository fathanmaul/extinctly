import { useEffect } from "react";
import Container from "../Components/Container";
import Jumbotron from "../Components/Home/Jumbotron";
import Navbar from "../Components/Navbar";
import EllipseTransparent from "../assets/ellipse.png";
import Development from "../Components/Utilities/Development";

const About = () => {
  useEffect(() => {
    document.title = "About";
  })
  return (
    <div className="mb-20">
      <Navbar />
      <div className="container h-screen md:h-full md:mt-[200px]">
        <Development />
      </div>
    </div>
  );
};

export default About;
