"use client";

import React, { FC } from "react";

import meta from "./meta.json";
import { AudioPlayer } from "@/components/AudioPlayer";
import ClientNextCard from "@/components/ClientNextCard";
import Image from "next/image";

const { title, description, date, location, imageUrl, id } = meta;

interface IProps {}

/**
 * @author
 * @function @Entry
 **/
const songTitle = "Louder - Dotan";

const playlist = [
  {
    name: songTitle,
    writer: "",
    img: "/images/day-2-preview.jpg",
    src: `/audios/${new Date(date).getDate()}-${(new Date(date).getMonth() + 1).toString().padStart(2, "0")}-${new Date(date).getFullYear()}/${songTitle}.mp3`,
    id: 1,
  },
];

const Entry: FC<IProps> = () => {
  return (
    <div>
      <div className="absolute z-0 w-full h-full bg-black">
        <Image
          src={meta.imageUrl}
          width={2000}
          height={1000}
          alt="Background Image"
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      <div className="relative z-10 w-full h-screen flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-center">
          {description.split("—")[0]} <br /> —{description.split("—")[1]}
        </p>

        <p className="text-sm text-neutral-400 mb-8">
          {new Date(date).toLocaleDateString()}
        </p>
        <AudioPlayer playlist={playlist} />
      </div>
      <div className="h-screen bg-gradient-to-b from-neutral-500 to-cyan-700 flex flex-col justify-center items-center">
        <h2 className="text-white text-4xl font-bold mb-4">
          Continua a leggere...
        </h2>
        <ClientNextCard
          fallbackMeta={meta}
          nextDay={`day-${+id.split("-")[1] + 1}`}
        />
      </div>
    </div>
  );
};

export default Entry;
