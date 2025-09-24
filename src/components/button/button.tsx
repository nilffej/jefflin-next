import React from "react";

interface HoverableButtonProps extends React.PropsWithChildren {
  link?: string;
}

const HoverableButton: React.FC<HoverableButtonProps> = ({
  children,
  link,
}) => {
  return (
    <a
      href={link}
      className="no-underline transition-transform duration-250 hover:scale-105 hover:cursor-pointer"
    >
      {children}
    </a>
  );
};

export default HoverableButton;
