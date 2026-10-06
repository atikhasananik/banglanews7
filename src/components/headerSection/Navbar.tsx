import Image from "next/image";
import logo from "../../../public/logo.webp"
import NavigationCatagory from "./NavigationCatagory";


const Navbar = () => {
const date = new Date().toLocaleDateString("bn-BD",{
    dateStyle:"full"
})
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative  my-4 flex justify-center items-center">
        <div className="flex gap-3  items-center justify-center">
          <div>
            <Image src={logo} alt="logo"></Image>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-red-700 tracking-wider">Bangla News 7</h1>
            <p className="text-sm text-gray-500  ">{date}</p>
          </div>
        </div>
        <div className="absolute right-0 flex gap-2 justify-end">
          <button >সাইন ইন</button>
          <button className="btn bg-red-700 text-white">সাইন আপ</button>
        </div>
      </div>
      <NavigationCatagory></NavigationCatagory>
    </div>
  );
};

export default Navbar;
