import useStore from "@/app/store";
import {getPokemons} from "@/app/lib/api";
import {useEffect, useRef} from "react";
import {IPokemon} from "@/app/types/common";

const usePokemons = () => {
  const {
    setIsLoading,
    setError,
    setPokemons,
    page,
    lastFetchedPage,
    setPage,
    setLastFetchedPage,
    pokemons} = useStore()

  useEffect(() => {
    if (lastFetchedPage === page) {
      return
    }

    setIsLoading(true)
    getPokemons(30, page)
      .then((r) => {
        if (r.error) {
          setError(r.error)
        } else if (Array.isArray(r.data)) {
          const pokArray = r.data.filter(d => !d?.error) as IPokemon[]
          setPokemons(pokemons.concat(pokArray))
          setLastFetchedPage(page)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [page])

  const fetchNext = () => {
    setPage(page + 1)
  }

  return {
    fetchNext
  }

}

export default usePokemons