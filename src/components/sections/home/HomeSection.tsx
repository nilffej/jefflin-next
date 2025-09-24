import Image from "next/image";
import { HOME_SECTION } from "../../navigation-bar/sections";
import JeffPhoto from "@/public/images/Jeff - BW.jpg";
import HoverableButton from "../../button/button";
import { LINKS } from "@/src/utils/links";
import Icon from "../../icon/icon";

const HomeSection = () => {
  return (
    <div
      className="h-[98vh] min-h-[42rem] w-full shadow-[0_1em_3em_rgba(0,0,0,0.2)]"
      id={HOME_SECTION}
    >
      <div className="flex h-full">
        <div className="relative flex min-w-[50vmax] flex-grow flex-col justify-center pl-16">
          <div className="mb-4 text-8xl font-medium">jeff lin</div>
          <div className="mb-32 text-3xl">
            software engineer
            <br />
            at <span className="font-semibold">HERE™</span>
          </div>
          <div className="flex items-center gap-2">
            <HoverableButton link={LINKS.resume}>
              <div className="flex h-8 items-center gap-2 rounded-lg bg-black px-3 font-medium text-white">
                <Icon icon="document" className="size-4" />
                <span className="font-semibold">Resume</span>
              </div>
            </HoverableButton>
            <HoverableButton link={LINKS.linkedin}>
              <Icon icon="linkedin" className="size-8" />
            </HoverableButton>
            <HoverableButton link={LINKS.github}>
              <Icon icon="github" className="size-8" />
            </HoverableButton>
          </div>
        </div>
        <div className="p-6">
          <Image
            src={JeffPhoto}
            className="hidden h-full max-w-full object-cover opacity-80 lg:block"
            alt="Jeff Lin"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
