import { FaGears } from "react-icons/fa6";
function Development() {
  return (
    <div className="w-full flex flex-col md:items-center items-start justify-center h-full px-5 md:px-0">
      <div className="mb-10">
        <FaGears className="w-36 h-36 text-[#BC8ECE]" />
      </div>
      <div>
        <p className="font-title font-bold text-4xl md:text-5xl mt-3 md:text-center text-start text-[#BC8ECE]">
          Be calm
        </p>
        <p className="font-title font-bold text-4xl md:text-5xl mt-3 md:text-center text-start text-[#BC8ECE]">
          This page is under development
        </p>
      </div>
    </div>
  );
}
export default Development;
