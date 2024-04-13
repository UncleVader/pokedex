'use client'
import useStore from "@/app/store";
import {useEffect} from "react";
import usePokemons from "@/app/hooks/usePokemons";

const PokemonsList = () => {
  const {isLoading, error, pokemons} = useStore()

  usePokemons()

  return(
    <>
      {
        isLoading && <>Loading...</> ||
        error && <>Error: {error}</> ||
        <div>
          {pokemons.map(p => (<div key={p.id}>{p.id}</div>))}
        </div>
      }
    </>
  )
}

export default PokemonsList