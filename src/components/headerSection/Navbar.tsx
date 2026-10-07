import Image from "next/image";
import logo from "../../../public/logo.webp";
import NavigationCatagory from "./NavigationCatagory";
import { Menu } from "lucide-react";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative  my-4 flex max-sm:ml-3 max-sm:justify-start justify-center items-center">
        <div className="flex gap-3">
          <div>
            <Image src={logo} alt="logo"></Image>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-red-700 tracking-wider">
              Bangla News 7
            </h1>
            <p className="text-sm text-gray-500  ">{date}</p>
          </div>
        </div>
        <div className="absolute right-0 flex items-center mr-4 ">
          <span className="sm:hidden">
            <Menu></Menu>
          </span>
          <div className="flex gap-2 max-sm:hidden justify-end">
            <button>সাইন ইন</button>
            <button className="btn bg-red-700 text-white">সাইন আপ</button>
          </div>
        </div>
      </div>
      <NavigationCatagory></NavigationCatagory>
    </div>
  );
};

export default Navbar;
