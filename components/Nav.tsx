import logo from "../public/Logo.svg";

import Image from "next/image";
import Button from "./global/Button";

const Nav = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-[120px] bg-silver fixed top-0 left-0 z-50">
      <Image src={logo} alt="Logo" width={100} height={24} />
      <div className="flex items-center justify-normal gap-[50px]">
        <a href="#" className="text-[#18191F] body-r-2">
          Home
        </a>
        <a href="#" className="text-[#18191F] body-r-2">
          Service
        </a>
        <a href="#" className="text-[#18191F] body-r-2">
          Feature
        </a>
        <a href="#" className="text-[#18191F] body-r-2">
          Product
        </a>
        <a href="#" className="text-[#18191F] body-r-2">
          Testimonial
        </a>
        <a href="#" className="text-[#18191F] body-r-2">
          FAQ
        </a>
      </div>
      <div className="flex items-center justify-normal gap-[14px]">
        <Button size="small" type="tertiary">
          Login
        </Button>
        <Button size="small" type="primary">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Nav;
