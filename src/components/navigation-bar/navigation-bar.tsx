"use client";

import { useState } from "react";
import NavBarIcon from "./navbar-icon";
import {
  ABOUT_SECTION,
  EXPERIENCE_SECTION,
  HOME_SECTION,
  SECTIONS_LIST,
  SiteSection,
} from "./sections";
import { IconTitle } from "@/src/utils/icons";

const sectionIcons = {
  [HOME_SECTION]: "home" as IconTitle,
  [ABOUT_SECTION]: "person" as IconTitle,
  [EXPERIENCE_SECTION]: "work" as IconTitle,
};

const NavigationBar: React.FC = () => {
  const [selectedSection, setSelectedSection] =
    useState<SiteSection>("home-section");

  return (
    <div className="fixed z-50 hidden h-screen min-h-[42rem] w-16 flex-shrink-0 items-center justify-center border-r border-black/20 bg-[#faf9f6] sm:flex">
      <div className="relative flex flex-col items-center justify-center gap-24">
        {SECTIONS_LIST.map((title, index) => (
          <NavBarIcon
            icon={sectionIcons[title]}
            selected={title === selectedSection}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
