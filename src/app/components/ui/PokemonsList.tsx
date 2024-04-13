'use client'
import useStore from "@/app/store";
import usePokemons from "@/app/hooks/usePokemons";
import PokemonListItem from "@/app/components/ui/PokemonListItem/PokemonListItem";

const PokemonsList = () => {
  usePokemons()
  const {isLoading, error, pokemons} = useStore()

  return(
    <>
      {
        isLoading && <>Loading...</> ||
        error && <>Error: {error}</> ||
        <div className={"grid grid-cols-4 gap-8"}>
          {pokemons.map(p => (<PokemonListItem key={p.id} item={p}/>))}
        </div>
      }
    </>
  )
}

export default PokemonsList