import {IPokemon, TJSONResponse} from "@/app/types/common";
import async from "async"

const fetcher = (url:string):Promise<TJSONResponse> => {
  return fetch(url,{
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(r => r.json())
    .then(data => ({data}))
    .catch(error => {
      console.error(error)
      return {error: error?.message || JSON.stringify(error)}
    })
}

export const getPokemonData = async (id:number|string):Promise<TJSONResponse> => {
  return fetcher(`https://pokeapi.co/api/v2/pokemon/${id}`)
}


export const getPokemons = async (limit:number = 120, page: number = 0):Promise<TJSONResponse> => {
  const blackTextColorTypes = ['bug']
  const supportedTypes = ['grass','fire','fighting','poison','water','electric','bug','normal','ground']

  const offset = page ? `&offset=${page*limit}` : ''
  return fetcher(`https://pokeapi.co/api/v2/pokemon?limit=${limit}${offset}`)
    .then(async (r) => {
      if (r?.error) {
        return r
      }
      if (!r?.data || !("results" in r.data) || !Array.isArray(r.data.results)) {
        return {error: 'no data'}
      }

      const result = await async.mapLimit(r.data.results, 5, async (p:IPokemon) => {
        const idStr = p.url.split('/').filter(e=>e).pop()
        if (!idStr) {
          return {error: 'unknown id'}
        }
        const id = parseInt(idStr)

        const pokemonData = await getPokemonData(id)
        if (pokemonData?.error) {
          return {error: pokemonData.error}
        }
        if (!pokemonData.data) {
          return {error: 'no data'}
        }


        const types = ('types' in pokemonData.data) && Array.isArray(pokemonData.data.types) && pokemonData.data.types?.map(t => ({name:t.type.name})) || []
        const firstType = ((supportedTypes.includes(types[0]?.name) && types[0].name) || 'default').toLowerCase()
        const sprites = pokemonData.data.sprites
        const avatar = sprites?.front_default || '/no-image.png'


        return {
          ...p,
          id,
          types,
          avatar,
          color: firstType,
          textBlack: blackTextColorTypes.includes(firstType)
        }
      })

      if (result?.error) {
        return {error: result.error}
      }
      return {data: result}
    })
}