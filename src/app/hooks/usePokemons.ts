import useStore from "@/app/store";
import {getPokemons} from "@/app/lib/api";
import {useEffect, useRef} from "react";
import {IPokemon} from "@/app/types/common";

const usePokemons = () => {
  const {setIsLoading, setError, setPokemons, page, setPage, pokemons} = useStore()
  const initStarted = useRef(false)

  useEffect(() => {
    if (initStarted.current && !page) {
      return
    }
    initStarted.current = true

    setIsLoading(true)
    getPokemons(30, page)
      .then((r) => {
        if (r.error) {
          setError(r.error)
        } else if (Array.isArray(r.data)) {
          const pokarray = r.data.filter(d => !d?.error) as IPokemon[]
          setPokemons(pokemons.concat(pokarray))
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