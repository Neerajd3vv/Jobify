import Button from "./button";
import { useNavigate } from "react-router-dom";
function Appbar() {
  const navigate = useNavigate();

  return (
   <div className="flex justify-between py-4  px-6 lg:px-40 border-b-2 border-slate-300">
      <div className="font-Poppins font-bold text-black text-4xl">Jobify</div>
      <Button
        style="bg-blue-600 hover:bg-blue-500 font-Afacad px-5 text-white  text-xl py-2 rounded-lg"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
    </div>
  );
}

export default Appbar;
