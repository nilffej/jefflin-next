export const HOME_SECTION = "home-section";
export const ABOUT_SECTION = "about-section";
export const EXPERIENCE_SECTION = "experience-section";
export const SKILLS_SECTION = "skills-section";

export const SECTIONS_LIST = [
  HOME_SECTION,
  ABOUT_SECTION,
  EXPERIENCE_SECTION,
] as const;

export type SiteSection = (typeof SECTIONS_LIST)[number];
