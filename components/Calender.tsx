import Image from "next/image";

import MobileLogin from "@/public/assets/images/pana.svg";
import Button from "./global/Button";

const Calender = () => {
  return (
    <div className="flex items-center justify-center w-full gap-[50px]">
      <Image src={MobileLogin} alt="mobile-login" width={442} height={443} />
      <div className="flex flex-col items-start justify-start">
        <p className="text-darkGrey head-2 max-w-[601px] text-wrap">
          How to design your site footer like we did
        </p>
        <span className="text-grey body-r-3 max-w-[601px] text-wrap mt-4 mb-8">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </span>
        <Button size="large" type="primary">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Calender;
