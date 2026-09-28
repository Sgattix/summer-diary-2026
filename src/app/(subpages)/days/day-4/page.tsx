"use client";

import React, { FC } from "react";

import meta from "./meta.json";
import { AudioPlayer } from "@/components/AudioPlayer";
import ClientNextCard from "@/components/ClientNextCard";
import Lightfall from "@/components/ui/LightFall";

const { title, description, date, location, imageUrl, id } = meta;

interface IProps {}

/**
 * @author
 * @function @Entry
 **/

const playlist = [
  {
    name: "The Story - Brandi Carlile",
    writer: "Brandi Carlile",
    img: "/images/day-2-preview.jpg",
    src: "/audios/21-06-2026/The Story - Brandi Carlile.mp3",
    id: 1,
  },
];

const Entry: FC<IProps> = () => {
  return (
    <div>
      <div className="absolute z-0 w-full h-full bg-black">
        <Lightfall
          colors={["#A6C8FF", "#5227FF", "#FF9FFC"]}
          backgroundColor="#0A29FF"
          speed={0.2}
          streakCount={2}
          streakWidth={1}
          streakLength={0.4}
          glow={1}
          density={0.3}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.1}
          opacity={1}
          mouseInteraction={false}
          mouseStrength={0}
          mouseRadius={1}
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
      <div className="h-screen bg-gradient-to-b from-black to-cyan-700 flex flex-col justify-center items-center">
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
