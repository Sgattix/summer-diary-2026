"use client";

import React from "react";
import Image from "next/image";
import { Loader } from "./Loader";

interface Props {
  day: string; // folder name like '30-06-2025'
}

export const ImageGalleryModal: React.FC<Props> = ({ day }) => {
  const [open, setOpen] = React.useState(false);
  // images array may contain image urls or video urls
  const [images, setImages] = React.useState<string[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/days/images/${day}`);
      const json = await res.json();
      setImages(json.data || []);
      setIndex(0);
    } catch (e) {
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const openModal = async () => {
    if (!images) await fetchImages();
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const showPrev = () => {
    if (!images || images.length === 0) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const showNext = () => {
    if (!images || images.length === 0) return;
    setIndex((i) => (i + 1) % images.length);
  };

  // keyboard navigation
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images]);

  // touch / swipe support
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 50; // px
    if (delta > threshold) showNext();
    else if (delta < -threshold) showPrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // preload current and adjacent images
  React.useEffect(() => {
    if (!images || images.length === 0) return;
    const toPreload = [
      index,
      (index + 1) % images.length,
      (index - 1 + images.length) % images.length,
    ];
    toPreload.forEach((i) => {
      if (typeof window !== "undefined") {
        const src = images[i];
        if (src.match(/\.(mp4|webm|mov|m4v)(\?.*)?$/i)) {
          // preload video metadata
          const v = document.createElement("video");
          v.preload = "metadata";
          v.src = src;
        } else {
          const imgEl = document.createElement("img");
          imgEl.src = src;
        }
      }
    });
  }, [index, images]);

  return (
    <div>
      <button
        onClick={openModal}
        className="px-6 py-3 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition"
      >
        Apri galleria foto
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80" onClick={closeModal} />

          <div className="relative z-10 w-full max-w-6xl h-[85vh] p-4 flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <div className="text-white">
                {images ? `${index + 1} / ${images.length}` : ""}
              </div>
              <div>
                <button
                  onClick={closeModal}
                  className="text-white bg-black/50 px-3 py-1 rounded"
                >
                  Chiudi
                </button>
              </div>
            </div>

            <div
              className="flex-1 flex items-center justify-center relative bg-black rounded"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {loading && <Loader />}

              {!loading && images && images.length === 0 && (
                <div className="text-white">
                  Nessuna immagine trovata per questa giornata.
                </div>
              )}

              {!loading && images && images.length > 0 && (
                <>
                  <button
                    onClick={showPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
                    aria-label="Previous"
                  >
                    ‹
                  </button>

                  <div className="max-h-[78vh] max-w-full w-full flex items-center justify-center">
                    {images[index].match(/\.(mp4|webm|mov|m4v)(\?.*)?$/i) ? (
                      <video
                        src={images[index]}
                        className="object-contain max-h-[78vh] max-w-full"
                        controls
                        playsInline
                      // muted by default to allow autoplay in some browsers if added later
                      />
                    ) : (
                        <Image
                          src={images[index]}
                          alt={`Image ${index + 1}`}
                          width={1600}
                          height={1200}
                          className="object-contain max-h-[78vh]"
                        />
                    )}
                  </div>

                  <button
                    onClick={showNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {!loading && images && images.length > 0 && (
              <div className="mt-3 overflow-x-auto scrollbar-hide">
                <div className="flex space-x-2">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setIndex(i)}
                      className={`relative rounded overflow-hidden border-2 ${
                        i === index ? "border-amber-400" : "border-transparent"
                      }`}
                    >
                      {src.match(/\.(mp4|webm|mov|m4v)(\?.*)?$/i) ? (
                        <div className="w-[120px] h-[80px] bg-black flex items-center justify-center">
                          <video
                            src={src}
                            className="object-cover w-full h-full"
                            muted
                            playsInline
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <svg
                              className="w-6 h-6 text-white opacity-90"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      ) : (
                          <Image
                            src={src}
                            alt={`thumb-${i}`}
                            width={120}
                            height={80}
                            className="object-cover block"
                          />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryModal;
