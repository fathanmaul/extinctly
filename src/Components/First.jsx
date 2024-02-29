import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Home Page Route</h3>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        To Second Page
      </button>
    </>
  );
};

export default First;
