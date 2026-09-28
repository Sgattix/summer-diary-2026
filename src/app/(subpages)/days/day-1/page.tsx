import DarkVeil from "@/components/DarkVeil/DarkVeil";
import { Meta } from "@/types/diaryPageData";
import { IconArrowDown, IconQrcode } from "@tabler/icons-react";
import React, { FC } from "react";
import todayMeta from "./meta.json";
import ClientNextCard from "@/components/ClientNextCard";

const { location, title, description, date, id } = todayMeta as Meta;

/**
 * @author Sgattix
 * @function @Entry
 **/

const Entry: FC = () => {
  return (
    <div className="bg-black">
      <div className="absolute z-0 top-0 left-0 w-full min-h-screen overflow-hidden">
        <DarkVeil hueShift={50} />
      </div>

      <div className="relative z-10 tracking-tighter h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          <p className="text-sm text-gray-300">
            {location} - {new Date(date ?? "").toLocaleDateString()}
          </p>
          <br />
        </div>
        <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center flex flex-col justify-center items-center">
          <IconArrowDown className="animate-bounce text-white" />
          <br />
          <span className="text-lg text-gray-300">Scorri giù</span>
        </p>
      </div>

      <section
        className="
          min-h-screen bg-black p-8 text-white max-w-4xl mx-auto
        "
      >
        <h2 className="text-3xl font-bold mb-2 flex items-center gap-2 text-center">
          Come respirare liberamente
        </h2>
        <div className="bg-blue-500 p-10 rounded-lg my-10">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            Scansiona il QR Code <IconQrcode />
          </h2>
          <p>
            Quando su una pagina del diario fisico viene mostrato un codice QR
            come quello che ti ha portato qui, assicurati di scansionarlo per
            accedere ai contenuti digitali associati.
          </p>
        </div>
        <div className="bg-red-500 p-10 rounded-lg my-10">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            Usa i contenuti multimediali durante la lettura
          </h2>
          <strong>IMPORTANTE:</strong> Spesso, i contenuti digitali includono
          brani musicali, video o audio che arricchiscono l&apos;esperienza del
          diario. E l'autore consiglia di utilizzarli per un'immersione totale
          nella narrazione.
        </div>
        <div className="bg-green-500 p-10 rounded-lg my-10">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            Esperienze
          </h2>
          Quando ti imbatti nel simbolo 🔃/🔄️, ti trovi di fronte ad
          un'esperienza. Per leggere il contenuto dell'esperienza: <br />
          1. Chiudi il diario; <br />
          2. Gira la copertina in modo che la strada si trovi sul lato alto;{" "}
          <br />
          3. Capovolgi il diario lungo gli anelli che si trovano sulla destra;{" "}
          <br />
          4. Apri il secondo volume; <br />
          5. Buona lettura!
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-primary p-8 text-white h-screen text-center">
        <h2 className="text-4xl font-bold mb-4">Continua a leggere...</h2>
        <ClientNextCard
          fallbackMeta={todayMeta}
          nextDay={`day-${+id.split("-")[1] + 1}`}
        />
      </section>
    </div>
  );
};

export default Entry;
