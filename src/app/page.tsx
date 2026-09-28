"use client";
import { Carousel } from "@/components/Carousel";
import { CarouselCard } from "@/components/CarouselCard";
import { Loader } from "@/components/Loader";
import { useEffect, useState } from "react";

type FeaturedDay = {
  data: {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    imageUrl: string;
    route: string;
  };
};

export default function Home() {
  const [featuredDays, setFeaturedDays] = useState<FeaturedDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedDays = async () => {
      const response = await fetch("/api/days/featured");
      const data = await response.json();
      setFeaturedDays(data.data);
      setLoading(false);
    };

    fetchFeaturedDays();
  }, []);

  return (
    <div>
      {loading && <Loader />}

      {!loading && featuredDays.length === 0 && (
        <div className="flex items-center justify-center h-screen">
          <p className="text-lg text-gray-500">
            Nessun giorno in evidenza trovato.
          </p>
        </div>
      )}

      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-secondary to-primary">
        {/* Day card carousel */}
        <Carousel className="p-20">
          {featuredDays.map((day) => (
            <CarouselCard
              key={day.data.id}
              cardInfos={{
                id: day.data.id,
                title: day.data.title,
                description: day.data.description,
                date: day.data.date,
                location: day.data.location,
                imageUrl: day.data.imageUrl,
                route: day.data.route,
              }}
            />
          ))}
        </Carousel>
      </main>
    </div>
  );
}
