import React from "react";
import { fetchPokemonData } from "@/app/apis/pokemons";
import Image from "next/image";
import Link from "next/link";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon = await fetchPokemonData(params.id);

  return (
    <div className="pokemon-details max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      <div className="bg-rose-100	text-gray-800 text-center p-4">
        <h2 className="text-2xl font-bold">{pokemon.korean_name}</h2>
        <p>No. {pokemon.id.toString().padStart(4, "0")}</p>
      </div>
      <div className="p-4 text-black flex flex-col justify-start items-center">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          className="mx-auto"
          width={96}
          height={96}
        />
        <p className="text-center text-xl my-2">이름: {pokemon.korean_name}</p>
        <div className="flex gap-2">
          <p className="text-center">키: {pokemon.height / 10} m</p>
          <p className="text-center">무게: {pokemon.weight / 10}kg</p>
        </div>
        <div className="text-center my-2">
          <p className="font-bold mb-5">기술:</p>
          <div className="flex flex-wrap gap-2 items-center text-center justify-center">
            {pokemon.moves.map((move: any) => (
              <div key={move.move.name}>{move.move.korean_name}</div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <Link href="/" className="bg-rose-400	text-white px-4 py-2 rounded">
            뒤로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
