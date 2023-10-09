"use client";

import Hero from "@/components/Hero";
import PlaceList from "@/components/PlaceList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    getPLaceList("Hotels in new york");
  }, []);

  const getPLaceList = async (value: string) => {
    setPlaceList([]);
    const result = await fetch("/api/google-place-api?q=" + value);
    const data = await result.json();

    setPlaceList(data.resp.results);
  };

  return (
    <div>
      <Hero userInput={(value: string) => getPLaceList(value)} />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </div>
  );
}
