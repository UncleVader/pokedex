'use client'
import usePokemon from "@/app/pokemon/[id]/usePokemon";
import Loader from "@/app/components/ui/Loader";
import PokemonCard from "@/app/components/ui/PokemonCard/PokemonCard";

interface IProps {
  params: {
    id: string
  }
}

export default function Page({params: {id}}:IProps) {
  const {isLoading, error, data} = usePokemon(+id)

  return (
    <main className="flex min-h-screen flex-col p-8 bg-main-bg gap-8">
      {isLoading && <Loader/>}
      {
        error && <>Error: {error}</> ||
        data && <PokemonCard data={data}/> ||
        <>No Pokemon data</>
      }
    </main>
  )
}