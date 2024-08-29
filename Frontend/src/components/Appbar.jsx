import Button from "./button";
import { Dropdown } from "./Dropdown";
import { useNavigate } from "react-router-dom";
function Appbar() {
  const navigate = useNavigate();

  return (
   <div className="flex justify-between py-4  px-6 lg:px-40 border-b-2 border-slate-300">
      <div onClick={() => {
        navigate("/")
      }} className=" cursor-pointer font-Poppins font-bold text-black text-4xl">Jobify</div>
      <div className="flex items-center">
      <Dropdown/>
      <Button
        style="bg-blue-700 hidden bg-blue-700  hover:bg-blue-600 font-semibold  px-8 rounded-lg  lg:block hover:bg-blue-600 ml-20  px-7 text-white text-lg py-2 "
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
      </div>
      
    </div>
  );
}

export default Appbar;
