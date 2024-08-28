import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Dropdown() {
  const navigate = useNavigate();

  const selectHandler = (value) => {
    if ( value === "Admin-Dashboard") {
      navigate("/admin");
    } else if (value === "Home-Page") {
      navigate("/");
    }
  };

  return (
    <Select onValueChange={selectHandler}>
      <SelectTrigger className=" w-[160px] lg:w-[200px] font-Afacad text-lg  focus:ring-0 bg-actualBlack text-white  ">
        <SelectValue placeholder="Switch to" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Admin-Dashboard">Admin-Dashboard</SelectItem>
          <SelectItem value="Home-Page">Home-Page</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
