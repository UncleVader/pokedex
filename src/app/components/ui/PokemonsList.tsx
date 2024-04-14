'use client'
import useStore from "@/app/store";
import usePokemons from "@/app/hooks/usePokemons";
import PokemonListItem from "@/app/components/ui/PokemonListItem/PokemonListItem";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "@/app/components/ui/Loader";

const PokemonsList = () => {
  const {fetchNext} = usePokemons()
  const {isLoading, error, filtered, page} = useStore()

  return (
    <>
      {isLoading && <Loader/>}
      {
        error && <>Error: {error}</> ||
        !filtered.length && <>No Pokemons</> ||
        <InfiniteScroll
          dataLength={filtered.length}
          next={fetchNext}
          hasMore={true}
          loader={!!page && <h4>Loading...</h4>}
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-5 -m-5"}
        >
          {filtered.map((p, i) => (<PokemonListItem key={i} item={p}/>))}
        </InfiniteScroll>
      }

    </>

  )
}

export default PokemonsList