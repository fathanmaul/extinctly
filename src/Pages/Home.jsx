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
      <div className="container h-screen md:h-full md:mt-[200px]">
        <div className="-z-50 absolute bg-red-500 select-none">
          <img
            src={EllipseTransparent}
            alt=""
            className="fixed overflow-hidden"
          />
        </div>
        <div className="-z-50 absolute -top-[700px] left-[800px] bg-red-500 select-none">
          <img
            src={EllipseTransparent}
            alt=""
            className="fixed  overflow-hidden"
          />
        </div>
        <Jumbotron />
      </div>
    </div>
  );
};

export default Home;
