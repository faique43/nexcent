import Button from "./global/Button";
import Image from "next/image";

import right from "@/public/assets/icons/RightWhite.svg";
import logo from "@/public/assets/icons/Logo.svg";
import send from "@/public/assets/icons/send.svg";
import { social } from "@/constants/social";
import { links1, links2 } from "@/constants/links";

const LinkColumn = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-6">
      <p className="text-white head-4">{title}</p>
      <div className="flex flex-col items-start justify-start gap-3">
        {links.map((link) => (
          <a key={link} href="#" className="text-silver body-r-3">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full py-8 gap-8 bg-silver">
        <p className="text-secondary head-1 w-[887px] text-center">
          Pellentesque suscipit fringilla libero eu.
        </p>
        <Button size="large" type="primary" icon={right} iconPosition="right">
          Get a Demo
        </Button>
      </div>
      <div className="flex items-center justify-center w-full bg-secondary py-16 gap-[125px]">
        <div className="flex flex-col items-start justify-center gap-[30px] pr-40">
          <Image src={logo} alt="logo" />
          <p className="text-silver body-r-3 w-[220px]">
            Copyright © 2020 Nexcent ltd. All rights reserved
          </p>
          <div className="flex items-center justify-start gap-4">
            {social.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center bg-white bg-opacity-10 rounded-full w-8 h-8"
              >
                <Image src={item} alt="social" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start justify-center gap-20">
          <LinkColumn title={links1.head} links={links1.links} />
          <LinkColumn title={links2.head} links={links2.links} />
          <div className="flex flex-col items-start justify-start gap-6">
            <p className="text-white head-4">Stay up to date</p>
            <div className="flex items-center justify-between gap-4 p-3 w-[255px] bg-white bg-opacity-10 rounded-lg">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent w-full text-white body-r-3 placeholder:text-[D9DBE1] focus:outline-none"
              />
              <Image src={send} alt="send" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
