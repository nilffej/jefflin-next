import { iconMap, IconTitle } from "@/src/utils/icons";

interface NavBarIconProps {
  className?: string;
  icon: IconTitle;
}

const Icon: React.FC<NavBarIconProps> = ({ className, icon }) => {
  const IconComponent = iconMap[icon];
  return <IconComponent className={className} />;
};

export default Icon;
