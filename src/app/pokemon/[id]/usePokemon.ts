'use client'
import {getPokemonData} from "@/app/lib/api";
import {useEffect, useRef, useState} from "react";
import {IRawPokemon} from "@/app/types/common";

const usePokemon = (id:number) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState<IRawPokemon|null>(null)
  const initStarted = useRef(false)

  useEffect(() => {
    if (initStarted.current) {
      return
    }
    initStarted.current = true

    setIsLoading(true)
    getPokemonData(id)
      .then(r => {
        if (r.error) {
          setError(r.error)
        }
        setData(r)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return {
    isLoading,
    error,
    data
  }
}

export default usePokemon