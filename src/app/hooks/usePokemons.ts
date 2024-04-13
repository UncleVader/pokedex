import useStore from "@/app/store";
import {getPokemons} from "@/app/lib/api";
import {useEffect, useRef} from "react";

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
      .then(r => {
        if (r.error) {
          setError(r.error)
        }
        setPokemons(pokemons.concat(r))
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