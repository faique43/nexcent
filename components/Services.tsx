import Image from "next/image";
import { StaticImageData } from "next/image";

import { services } from "@/constants/services";

const Service = ({
  img,
  name,
  description
}: {
  img: StaticImageData;
  name: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-6 px-8">
      <div className="flex items-center justify-center">
        <Image src={img} alt="service" width={65} height={56} />
      </div>
      <div className="flex flex-col items-center justify-between gap-2">
        <p className="text-darkGrey head-3 text-center max-w-[230px]">{name}</p>
        <p className="text-grey body-r-3 text-center max-w-[251px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="flex flex-col items-center justify-between">
        <p className="text-darkGrey head-2 max-w-[542px] text-wrap text-center">
          Manage your entire community in a single system
        </p>
        <span className="text-grey body-r-2 mt-2">
          Who is Nextcent suitable for?
        </span>
      </div>
      <div className="flex items-center justify-center gap-[127.5px] w-full">
        {services.map((service, index) => (
          <Service
            key={index}
            img={service.img}
            name={service.name}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
