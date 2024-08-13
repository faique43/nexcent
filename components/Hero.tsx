import Image from "next/image";

import heroImge from "../public/assets/images/Illustration.svg";
import Button from "./global/Button";

const Hero = () => {
  return (
    <section className="bg-silver flex items-center justify-center gap-[104px] h-[600px] w-full mt-16">
      <div className="flex flex-col items-start justify-start">
        <p className="text-darkGrey head-1">Lessons and insights</p>
        <span className="text-primary head-1">from 8 years</span>
        <p className="text-grey body-r-2 mt-4 mb-8">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button size="large" type="primary">
          Register
        </Button>
      </div>
      <Image src={heroImge} alt="Hero Image" />
    </section>
  );
};

export default Hero;
