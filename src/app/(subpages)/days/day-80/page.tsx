"use client";
import { AudioPlayer } from "@/components/AudioPlayer";
import { Footer } from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import React, { FC } from "react";
import meta from './meta.json'
import CountUp from "@/components/CountUp/CountUp";
import confetti from "canvas-confetti";

interface IProps { }

/**
 * @author
 * @function @Entry
 **/
const { title, description, date, location, imageUrl, id } = meta;

const songTitle = "QUELLA LIBERTÀ - Andrea Cerrato";

const playlist = [
  {
    name: songTitle,
    writer: "",
    img: "/images/day-2-preview.jpg",
    src: `/audios/${new Date(date).getDate()}-${(new Date(date).getMonth() + 1).toString().padStart(2, "0")}-${new Date(date).getFullYear()}/${songTitle}.mp3`,
    id: 1,
  },
];

const Entry: FC<IProps> = (props) => {
  const handleAnimationEnd = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

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

      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-linear-to-b from-neutral-700 to-black text-white relative">
        <h1 className="text-3xl font-bold mb-4">
          Qualche statistica sul nostro viaggio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full px-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Giorni di diario</h2>
            <CountUp
              to={80}
              duration={3}
              className="text-4xl font-bold text-cyan-500"
            />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Parole scritte</h2>
            <p className="flex items-center justify-center text-4xl ">
              <CountUp
                to={15360}
                duration={0.5}
                className="font-bold text-cyan-500"
                onEnd={handleAnimationEnd}
              />
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Città visitate</h2>
            <CountUp
              to={3}
              duration={3}
              className="text-4xl font-bold text-cyan-500"
            />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">
              Autore di Brani preferito
            </h2>
            <p className="text-4xl font-bold text-cyan-500">
              John Michael Howell
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center col-span-2 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-2">
              Autore di Citazioni Preferito
            </h2>
            <p className="text-4xl font-bold text-cyan-500">Marco Aurelio</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center col-span-3 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-2">Citazione preferita</h2>
            <p className="text-4xl font-bold text-cyan-500">
              "Il curioso paradosso è che quando mi accetto così come sono,
              allora posso cambiare.”
            </p>
            - Carl Rogers
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-black to-cyan-700 text-white">
        <h1 className="text-3xl font-bold mb-4">
          Grazie per aver letto il mio diario!
        </h1>
        <p className="max-w-2xl text-center">
          Spero che questa estate non abbia portato via troppo né a me né a te,
          che un giorno i miei ed i tuoi sogni lasciati a metà riaffiorino. Ogni
          fine è un nuovo inizio, e spero che questo diario sia solo l'inizio di
          un viaggio di crescita e scoperta per i miei 3 lettori. <br /> Non
          dimenticare mai di Respirare Liberamente.
          <br />A presto, <strong>Alessandro Sgattoni</strong>.
        </p>
      </section>
    </div>
  );
};
export default Entry;
