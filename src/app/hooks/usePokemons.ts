import useStore from "@/app/store";
import {getPokemons} from "@/app/lib/api";
import {useEffect, useRef} from "react";

const usePokemons = () => {
  const {setIsLoading, setError, setPokemons} = useStore()
  const initStarted = useRef(false)

  useEffect(() => {
    if (initStarted.current) {
      return
    }
    initStarted.current = true

    setIsLoading(true)
    getPokemons(10)
      .then(r => {
        if (r.error) {
          setError(r.error)
        }
        setPokemons(r)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

}

export default usePokemons