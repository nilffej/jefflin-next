import React from "react";
import Icon from "../icon/icon";
import { IconTitle } from "@/src/utils/icons";
import { twMerge } from "tailwind-merge";

interface NavBarIconProps {
  selected: boolean;
  icon: IconTitle;
}

const NavBarIcon: React.FC<NavBarIconProps> = ({ selected, icon }) => {
  return (
    <div
      className={twMerge(
        "flex size-11 items-center justify-center rounded-full",
        selected ? "bg-black" : "bg-transparent",
      )}
    >
      <Icon
        className={twMerge("size-6", selected && "text-white")}
        icon={icon}
      />
    </div>
  );
};

export default NavBarIcon;
