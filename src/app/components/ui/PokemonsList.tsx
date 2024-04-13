'use client'
import useStore from "@/app/store";
import usePokemons from "@/app/hooks/usePokemons";
import PokemonListItem from "@/app/components/ui/PokemonListItem/PokemonListItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "@/app/components/ui/Loader";

const PokemonsList = () => {
  const {fetchNext} = usePokemons()
  const {isLoading, error, filtered, pokemons, page} = useStore()
  const listFiltered = pokemons.length !== filtered.length

  return (
    <>
      {isLoading && <Loader/>}
      {
        error && <>Error: {error}</> ||
        !filtered.length && <>No Pokemons</> ||
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"}>
          {filtered.map((p, i) => (<PokemonListItem key={i} item={p}/>))}
        </div>
      }

      {!listFiltered && <InfiniteScroll
        dataLength={filtered.length} //This is important field to render the next data
        next={fetchNext}
        hasMore={true}
        loader={!!page && <h4>Loading...</h4>}
        endMessage={
          <p style={{textAlign: 'center'}}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      />
      }
    </>

  )
}

export default PokemonsList