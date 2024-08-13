import Image from "next/image";

import { achievements } from "@/constants/achievements";

const Achievement = ({
  title,
  count,
  image
}: {
  title: string;
  count: string;
  image: string;
}) => {
  return (
    <div className="flex items-start justify-start gap-4 w-[255px]">
      <Image src={image} width={48} height={48} alt={title} />
      <div className="flex flex-col items-start justify-center">
        <p className="text-darkGrey head-3">{count}</p>
        <p className="text-grey body-r-2">{title}</p>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="flex items-center justify-center gap-[72px] py-16 w-full bg-silver">
      <div className="flex flex-col items-start justify-center pr-[132px]">
        <p className="text-darkGrey head-2">Helping a local</p>
        <p className="text-primary head-2">business reinvent itself</p>
        <p className="text-[#18191F] body-r-2">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex items-start justify-start w-[540px] gap-x-[30px] gap-y-10 flex-wrap">
        {achievements.map((achievement, index) => (
          <Achievement
            key={index}
            title={achievement.title}
            count={achievement.count}
            image={achievement.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
