import useStore from "@/app/store";
import {getPokemons} from "@/app/lib/api";
import {useEffect} from "react";

const usePokemons = () => {
  const {setIsLoading, setError, setPokemons} = useStore()

  useEffect(() => {
    setIsLoading(true)
    getPokemons()
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