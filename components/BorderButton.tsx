import React from "react";
import { cn } from "@/lib/utils";

const BorderButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  btnClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  btnClasses?: string;
}) => {
  return (
    <div
      className={cn(
        `w-fit h-fit border-button relative flex justify-center mt-12`,
        otherClasses
      )}
    >
      <button
        className={`w-fit bg-white rounded-xl py-2 px-6 ${btnClasses}`}
        onClick={handleClick}
      >
        <span className="text-black flex items-center gap-2">
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </div>
  );
};

export default BorderButton;
