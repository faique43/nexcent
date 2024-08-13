import Image from "next/image";

import MobileLogin from "@/public/assets/images/MobileLogin.svg";
import Button from "./global/Button";

const Feature = () => {
  return (
    <div className="flex items-center justify-center w-full gap-[50px]">
      <Image src={MobileLogin} alt="mobile-login" width={442} height={443} />
      <div className="flex flex-col items-start justify-start">
        <p className="text-darkGrey head-2 max-w-[601px] text-wrap">
          The unseen of spending three years at Pixelgrade
        </p>
        <span className="text-grey body-r-3 max-w-[601px] text-wrap mt-4 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </span>
        <Button size="large" type="primary">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Feature;
