import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Development from "../Components/Utilities/Development";

function Projects() {
  useEffect(() => {
    document.title = "Projects";
  });
  return (
    <div className="mb-20">
      <Navbar />
      <div className="container h-screen md:h-full md:mt-[200px]">
        <Development />
      </div>
    </div>
  );
}

export default Projects;
