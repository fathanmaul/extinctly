import { useEffect } from "react";
import Container from "../Components/Container";
import First from "../Components/First";
import Jumbotron from "../Components/Home/Jumbotron";
import Navbar from "../Components/Navbar";
import EllipseTransparent from "../assets/ellipse.png";

const Home = () => {
  useEffect(() => {
    document.title = "Extinctly";

  })
  return (
    <div className="">
      <Navbar />
      <div className="container mt-12 md:h-full md:mt-[200px]">
        <Jumbotron />
      </div>
    </div>
  );
};

export default Home;
