"use client";

import React, { FC } from "react";

import meta from "./meta.json";
import { AudioPlayer } from "@/components/AudioPlayer";
import ClientNextCard from "@/components/ClientNextCard";
import LineWaves from "@/components/ui/LineWaves";

const { title, description, date, location, imageUrl, id } = meta;

interface IProps {}

/**
 * @author
 * @function @Entry
 **/

const playlist = [
  {
    name: "Interstellar - Imperial Orchestra",
    writer: "Hans Zimmer",
    img: "/images/day-2-preview.jpg",
    src: "/audios/20-06-2026/Interstellar - Imperial Orchestra.mp3",
    id: 1,
  },
];

const Entry: FC<IProps> = () => {
  return (
    <div>
      <div className="absolute z-0 w-full h-full bg-black">
        <LineWaves
          speed={0.1}
          innerLineCount={32}
          outerLineCount={32}
          warpIntensity={0.4}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={2.8}
          brightness={0.1}
          enableMouseInteraction
          mouseInfluence={2}
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
