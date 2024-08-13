import Image, { StaticImageData } from "next/image";

import CustomLink from "./global/Link";
import Right from "@/public/assets/icons/right.svg";
import { marketing } from "@/constants/marketing";

const Mark = ({ img, title }: { img: StaticImageData; title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <Image
          src={img}
          alt={title}
          width={368}
          height={286}
          className="rounded-lg"
        />
        <div className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 w-[317px] bg-silver shadow-lg rounded-lg p-4 flex flex-col items-center gap-4">
          <p className="text-grey head-4 text-center">{title}</p>
          <CustomLink size="large" state="normal" href="#">
            Readmore
            <span className="ml-2">
              <Image src={Right} alt="right" />
            </span>
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

const Marketing = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 mb-[134.6px]">
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <p className="text-darkGrey head-2">Caring is the new marketing</p>
        <p className="text-grey body-r-2 max-w-[628px] text-wrap text-center">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        {marketing.map((item) => (
          <Mark key={item.title} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Marketing;
