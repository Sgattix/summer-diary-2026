import { IconLoader2 } from "@tabler/icons-react";
import React, { FC } from "react";

interface IProps {}

/**
 * @author
 * @function @Loader
 **/

export const Loader: FC<IProps> = (props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center backdrop-blur-2xl absolute top-0 left-0 z-50">
      <IconLoader2
        className="animate-spin text-neutral-900"
        width={40}
        height={40}
      />
    </div>
  );
};
