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

const playlist = [
  {
    name: "Demons, Imagine Dragons",
    writer: "Imagine Dragons",
    img: "https://media.ascensionpress.com/wp-content/uploads/2019/10/alfons-morales-YLSwjSy7stw-unsplash.jpg",
    src: "/audios/02-09-2025/Demons - Imagine Dragons.mp3",
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
    <div className="relative">
      <Navbar />

      <div className="absolute z-10 right-0 w-screen h-screen bg-black">
        <Image
          src={meta.imageUrl}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>
        <Image
          src={meta.imageUrl}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50 absolute blur-[100px] z-0 max-h-[130vh]"
        />

      <div className="relative z-20 p-8 max-w-3xl mt-8 text-center flex justify-center flex-col mx-auto rounded-md items-center h-[90vh] text-white">
        <h1 className="text-3xl font-bold mb-4 ">
          2 Settembre 2025 <br />
          La fine
        </h1>
        <p>
          {meta.description}
        </p>

        <AudioPlayer playlist={playlist} />
      </div>
      
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-black text-white">
        <h1
          className="text-3xl font-bold mb-4"
        >Qualche statistica sul nostro viaggio</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full px-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Giorni di diario</h2>
            <CountUp to={67} duration={3} className="text-4xl font-bold text-orange-500" />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Parole scritte</h2>
            <p className="flex items-center justify-center text-4xl ">~<CountUp to={15000} duration={0.5} className="font-bold text-orange-500" onEnd={handleAnimationEnd} /></p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Città visitate</h2>
            <CountUp to={5} duration={3} className="text-4xl font-bold text-orange-500" />
          </div>
        </div>
        
      </section>
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-black to-orange-600 text-white">
        <h1
          className="text-3xl font-bold mb-4"
        >Grazie per aver letto il mio diario!</h1>
        <p
          className="max-w-2xl text-center"
        >Spero che tu abbia trovato ispirazione e conforto nelle mie parole, che tu abbia riconosciuto i tuoi demoni e li abbia affrontati con coraggio. 

        Ogni fine è un nuovo inizio, e spero che questo diario sia solo l'inizio di un viaggio di crescita e scoperta per te.
        <br />A presto, <strong>Alessandro Sgattoni</strong>.
        </p>
      </section>
      <Footer />
      <MobileNav />
    </div>
  );
};
export default Entry;
