import {IPokemon} from "@/app/types/common";
import async from "async"

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

export const getPokemonData = async (id:number|string) => {
  return fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`)
}


export const getPokemons = async (limit:number = 120, page: number = 0) => {
  const blackTextColorTypes = ['bug']
  const supportedTypes = ['grass','fire','fighting','poison','water','electric','bug','normal','ground']

  const offset = page ? `&offset=${page*limit}` : ''
  return fetcher(`https://pokeapi.co/api/v2/pokemon?limit=${limit}${offset}`)
    .then(r => {
      if (r.error) {
        return {error: r.error?.message || JSON.stringify(r.error)}
      }
      return async.mapLimit(r.results, 5, async (p:IPokemon) => {
        const id = p.url.split('/').filter(e=>e).pop()
        const data = await getPokemonData(id)
        if (data.error) {
          return {error: data.error}
        }

        const types = data?.types?.map(t => ({name:t.type.name})) || []
        const firstType = ((supportedTypes.includes(types[0]?.name) && types[0].name) || 'default').toLowerCase()
        const avatar = data?.sprites?.front_default || '/no-image.png'


        return {
          ...p,
          id,
          types,
          avatar,
          color: firstType,
          textBlack: blackTextColorTypes.includes(firstType)
        }
      })
    })
}