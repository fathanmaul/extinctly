import {
  MdAssistantNavigation,
  MdHome,
  MdChecklist,
  MdPerson,
  MdEmojiEvents,
} from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const navItem = new Map([
    ["/", "Home"],
    ["/projects", "Projects"],
    ["/achievements", "Achievements"],
    ["/about", "About"],
  ])

  return (
    <>
      <nav className=" top-0 left-0 right-0 text-primary py-5 px-3 md:px-0 transition-all ease-in-out duration-150">
        <div className="container flex flex-row justify-between items-center">
          {/* Title */}
          <div className="flex flex-row items-center justify-center gap-4">
            <MdAssistantNavigation className="w-6 h-6" />
            <h1 className="text-xl font-bold font-title">Extinctly</h1>
          </div>
          {/* Nav Item */}
          <div className="hidden md:block">
            <div className="flex flex-row font-display font-medium text-primary">
              {
                Array.from(navItem).map((item, index) => (
                  <Link to={item[0]} key={index} className={
                    "mx-5 "+(window.location.pathname === item[0] ? "font-bold" : "font-normal")
                  }>
                    {item[1]}
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </nav>
      <nav className="translate-y-0 md:translate-y-full transition-all duration-300 fixed bg-white border-t-2 border-[#BC8ECE] left-0 bottom-0 right-0 h-[55px] z-50">
        <div className="mx-7 flex justify-center items-center h-full">
          <div className="flex justify-between items-center h-full w-full">
            <Link to={"/"} className={
              "p-1 rounded-lg "+(window.location.pathname === "/" ? "text-[#BC8ECE]" : "text-gray-400")
            }>
              <MdHome className="w-7 h-7" />
            </Link>
            <Link to={"/projects"} className={
              "p-1 rounded-lg "+(window.location.pathname === "/projects" ? "text-[#BC8ECE]" : "text-gray-400")
            }>
              <MdChecklist className="w-7 h-7" />
            </Link>
            <Link to={"/achievements"} className={
              "p-1 rounded-lg "+(window.location.pathname === "/achievements" ? "text-[#BC8ECE]" : "text-gray-400")
            }>
              <MdEmojiEvents className="w-7 h-7" />
            </Link>
            <Link to={"/about"} className={
              "p-1 rounded-lg "+(window.location.pathname === "/about" ? "text-[#BC8ECE]" : "text-gray-400")
            }>
              <MdPerson className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
