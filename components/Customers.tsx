import Image from "next/image";

import CustomLink from "./global/Link";

import Tesla from "@/public/assets/images/tesla.jpg";
import Right from "@/public/assets/icons/right.svg";
import { customer } from "@/constants/clients";

const Customers = () => {
  return (
    <div className="flex items-center justify-center gap-[78px] py-8 bg-silver w-full">
      <Image
        src={Tesla}
        alt="tesla"
        width={326}
        height={326}
        className="object-cover aspect-square rounded-lg shadow-8px"
      />
      <div className="flex flex-col items-start justify-center gap-8 w-[748px]">
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-grey body-m-2">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>{" "}
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="text-primary head-4">Tim Smith</p>
            <p className="text-lightGrey body-r-2">
              British Dragon Boat Racing Association
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-8">
          <div className="flex items-center justify-start gap-10">
            {customer.map((item) => (
              <Image
                key={item}
                src={item}
                alt="Customer"
                width={40}
                height={40}
              />
            ))}
          </div>
          <CustomLink size="large" state="normal" href="#">
            Meet All Customers
            <span className="ml-2">{<Image src={Right} alt="right" />}</span>
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Customers;
