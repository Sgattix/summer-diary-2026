import React, { FC } from "react";

/**
 * @author
 * @function @About
 **/

const About: FC = () => {
  return (
    <div>
      <main className="p-20 min-h-screen bg-gradient-to-t from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto mt-40">
          <h1 className="text-4xl font-bold mb-4">
            Come maneggiarmi con cura (Istruzioni per il miglior uso)
          </h1>

          <p className="text-lg">
            Questo diario è stato progettato per essere intuitivo e facile da
            usare. Ecco alcuni suggerimenti per ottenere il massimo da questa
            esperienza:
          </p>
          <ul className="list-decimal list-inside">
            <li className="mb-2">
              <strong>Sfoglia il diario fisico:</strong> scegli una pagina ed
              inquadra il codice QR presente (Spesso accanto alla data)
            </li>
            <li className="mb-2">
              <strong>Una volta inquadrato il codice QR:</strong> segui il link
              che appare per accedere alla pagina corrispondente nel diario
              digitale.
            </li>
            <li className="mb-2">
              <strong>Attendi il caricamento della pagina:</strong> potrebbe
              richiedere alcuni secondi.
            </li>
            <li className="mb-2">
              <strong>Avvia il brano musicale suggerito per il giorno:</strong>{" "}
              mentre ascolti il brano, leggi la riflessione del giorno.
            </li>
            <li className="mb-2">
              <strong>Esplora eventuali contenuti multimediali:</strong>{" "}
              interagisci con video, audio o immagini per arricchire la tua
              esperienza.
            </li>
            <li className="mb-2">
              <strong>Ultimo, ma non per importanza, goditi il momento</strong>
            </li>
          </ul>

          <h1 className="text-4xl font-bold mb-4">
            Come è stato creato questo sito?
          </h1>
          <p className="text-lg">
            Questo sito è stato creato utilizzando Next.js, un framework React
            per lo sviluppo di applicazioni web. In parole povere, ho scritto
            ogni singola riga di codice per realizzare questa applicazione.
          </p>
          <p className="text-lg mt-4">
            Inoltre, non ho utilizzato alcun generatore di codice o strumento
            simile. Ogni componente, ogni pagina e ogni stile sono stati creati
            a mano e con cura. Questo approccio mi ha permesso di avere il pieno
            controllo sul design e sul contenuto unico delle singole pagine di
            diario
          </p>
          <p className="text-lg mt-4">
            Il sito è ospitato su un computer virtuale che attualmente sto
            pagando 40€ all&apos;anno. Ad essere precisi, si trova in un data
            center a Francoforte, in Germania (https://contabo.com/).
          </p>
          <p className="text-lg mt-4">
            L&apos;intero processo di creazione del sito e del diario è durato
            tutta l&apos;estate. Questo mi ha consentito di unire le mie
            passioni per la programmazione, il design e la scrittura in un unico
            progetto.
          </p>
        </div>
      </main>
    </div>
  );
};
export default About;
