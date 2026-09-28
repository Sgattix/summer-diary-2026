import { Meta } from "@/types/diaryPageData";
import { IconCalendar, IconMapPinFilled } from "@tabler/icons-react";
import ReadBadge from "./ui/ReadBadge";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  cardInfos: Meta;
}

/**
 * @author Sgattix
 * @function @CarouselCard
 **/

export const CarouselCard: FC<IProps> = ({
  cardInfos = {
    location: "Macerata, Italy",
    title: "Day X: A trip into the unknown",
    description:
      "Today was a beautiful day filled with sunshine and joy. I started my summer diary to capture all the wonderful moments.",
    imageUrl:
      "https://images.unsplash.com/photo-1682687980961-78fa83781450?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: new Date("2023-07-01T00:00:00Z"),
    route: "/days/day-x",

  },
}) => {
  const { location, title, description, imageUrl, date, route } = cardInfos;
  return (
    <div className="max-w-4xl w-full p-4 mx-auto z-10 h-fit">
      <div className="bg-white shadow-lg rounded-lg min-h-[50vh] h-fit max-w-2xl mx-auto">
        <div className="relative hover-card-animation z-10">
          {/* Card background image */}
          {typeof imageUrl === "string" && (
            <Image
              src={imageUrl}
              alt={title ?? ""}
              width={1000}
              height={1000}
              className="absolute inset-0 object-cover min-h-[50vh] h-full rounded-lg bg-black brightness-75"
              priority={true}
            />
          )}
          {typeof imageUrl === "object" && (
            <div className="absolute inset-0 object-cover min-h-[50vh] max-h-full rounded-lg">
              {imageUrl}
            </div>
          )}

          <div className="relative z-10 inset-0 w-full min-h-[50vh] h-fit flex flex-col justify-end">
            {/* Card content */}
            <div className="p-10">
              <div className="absolute top-0 left-0 flex items-center justify-between w-full p-10">
                <p className="w-fit text-white font-light flex items-center">
                  <IconMapPinFilled className="inline-block mr-2 " />
                  <span className="text-lg tracking-tight">{location}</span>
                </p>
                <div className="flex items-center gap-4">
                  <ReadBadge pathname={route ?? undefined} />
                  <p className="w-fit text-white font-light flex items-center">
                    <IconCalendar className="inline-block mr-2 " />
                    <span className="text-lg tracking-tight">
                      {new Date(date ?? "").toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white tracking-tight break-words">
                {title}
              </h1>
              <p className="text-lg text-white mt-4 font-medium">
                {description}
              </p>
              {route && (
                <Link href={route}>
                  <button className="w-full cursor-pointer p-5 border border-white text-white text-lg rounded-full my-5 hover:bg-white hover:text-black transition-colors">
                    Leggi questa giornata
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
