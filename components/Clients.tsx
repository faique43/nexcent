import Image from "next/image";

import { clients } from "@/constants/clients";

const Clients = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="flex flex-col items-center justify-between gap-2">
        <p className="text-darkGrey head-2">Our Clients</p>
        <span className="text-grey body-r-2">
          We have been working with some Fortune 500+ clients
        </span>
      </div>
      <div className="flex items-center justify-center gap-[140px] w-full h-24">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image src={client} alt="logo" width={48} height={48} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
