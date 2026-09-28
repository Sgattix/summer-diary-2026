"use client";

import React from "react";
import { CarouselCard } from "@/components/CarouselCard";
import { Meta } from "@/types/diaryPageData";

export const ClientNextCard: React.FC<{
  fallbackMeta: Meta | {};
  nextDay: string;
}> = ({ fallbackMeta, nextDay }) => {
  const [meta, setMeta] = React.useState<Meta | null>(null);

  React.useEffect(() => {
    let mounted = true;
    fetch(`/api/days/meta/${nextDay}`)
      .then((r) => r.json())
      .then((j) => {
        if (mounted) setMeta(j.data || null);
      })
      .catch(() => {
        if (mounted) setMeta(null);
      });
    return () => {
      mounted = false;
    };
  }, [nextDay]);

  const m = meta || fallbackMeta;

  return <CarouselCard cardInfos={m as Meta} />;
};

export default ClientNextCard;
