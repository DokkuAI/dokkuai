import Hamburger from "@/app/workspace/ui/Hamburger";
import MapIcon from "@/public/Map.svg";
import ChevronDownIcon from "@/public/ChevronDown.svg";
import ShareIcon from "@/public/Share.svg";
import Image from "next/image";
import AvatarCircles from "@/components/ui/avatar-circles";
import Export from "./Export";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];
const Navbar = () => {
  return (
    <div className="flex pl-4 pr-10 sm:pr-20 items-center justify-between h-[56px] shadow">
      <div className="flex gap-9">
        <Hamburger />
        <div className="flex h-[35px] px-3 items-center gap-2 border-2 border-[#BCC1CA] rounded">
          <Image src={MapIcon} alt="icon" />
          <div className="font-normal text-[14px] leading-[22px]">
            Jaskirat's Mind
          </div>
          <Image src={ChevronDownIcon} alt="icon" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-9">
        <AvatarCircles numPeople={4} avatarUrls={avatarUrls} />
        <div className="cursor-pointer   flex px-3 gap-2 bg-[#F3F4F6] items-center rounded border-2 border-[#F3F4F6] hover:border-black">
          <Image src={ShareIcon} alt="icon" />
          <div className="text-[14px] leading-[22px] font-normal font-[#323842]">
            Share
          </div>
        </div>
        <Export />
      </div>
    </div>
  );
};

export default Navbar;
