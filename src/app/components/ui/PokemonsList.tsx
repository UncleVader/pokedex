'use client'
import useStore from "@/app/store";
import usePokemons from "@/app/hooks/usePokemons";
import PokemonListItem from "@/app/components/ui/PokemonListItem/PokemonListItem";
import PokemonPopover from "@/app/components/radix/Popover";

const PokemonsList = () => {
  usePokemons()
  const {isLoading, error, filtered} = useStore()

  return (
    <>
      {
        isLoading && <>Loading...</> ||
        error && <>Error: {error}</> ||
        !filtered.length && <>No Pokemons</> ||
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"}>
          {/*{filtered.map(p => (*/}
          {/*  <PokemonPopover*/}
          {/*    key={p.id}*/}
          {/*    triggerChild={<PokemonListItem key={p.id} item={p}/>}*/}
          {/*    contentChild={<></>}*/}
          {/*  />*/}

          {/*))}*/}
          {filtered.map(p => (<PokemonListItem key={p.id} item={p}/>))}
        </div>
      }
    </>
  )
}

export default PokemonsList