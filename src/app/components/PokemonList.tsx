"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "../types/pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);

  return (
    <div className="p-6">
      {pokemons.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <p className="text-xl font-semibold">잠시만 기다려주세요!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="pokemon p-4 border rounded-lg border-rose-500"
            >
              <Link href={`/pokemon/${pokemon.id}`}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                  width={96}
                  height={96}
                />
                <p>{pokemon.korean_name}</p>
                <p>도감번호: {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
