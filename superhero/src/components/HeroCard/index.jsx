import { useEffect, useState } from "react";
import { useSearch } from "../../contexts";

export default function Hero() {
  const { hero, setHero } = useSearch();

  async function fetchSuperhero() {
    const response = await fetch("https://superheroapi.com/api/10224984114575672/search/batman");
    const rawData = await response.json();
    setHero(rawData);
  }

  useEffect(() => {
    fetchSuperhero();
  }, []);

  console.log(hero);

  return <div>index</div>;
}
