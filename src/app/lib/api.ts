import {IPokemon} from "@/app/types/common";

const fetcher = (url:string) => {
  return fetch(url,{
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(r => r.json())
    .catch(error => {
      console.error(error)
      return {error}
    })
}

export const getPokemons = async (limit:number = 120) => {
  return fetcher(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then(r => {
      if (r.error) {
        return {error: r.error?.message || JSON.stringify(r.error)}
      }
      return r.results.map((p:IPokemon) => {
        const id = p.url.split('/').filter(e=>e).pop()
        return {...p, id}
      })
    })
}