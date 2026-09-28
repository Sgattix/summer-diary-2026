import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  imageInfo: {
    src: string;
    alt: string;
    caption: string;
  };
}

/**
 * @author
 * @function @CarouselImage
 **/

export const CarouselImage: FC<IProps> = ({ imageInfo }) => {
  return (
    <div className="relative">
      <Image
        src={imageInfo.src}
        alt={imageInfo.alt}
        width={1000}
        height={1000}
        className="w-full h-screen object-cover brightness-50  "
      />
      <figcaption className="absolute top-10 left-10">
        <span className="text-white text-sm bg-black/50 p-2 rounded-md">
          {imageInfo.caption}
        </span>
      </figcaption>
    </div>
  );
};
