'use client'
import {FC} from "react";
import {IPokemon} from "@/app/types/common";
import {cn} from "@/app/lib/utils";
import PokemonFeatures from "@/app/components/ui/PokemonListItem/PokemonFeatures";
import IdBadge from "@/app/components/ui/PokemonListItem/IdBadge";
import { useRouter } from 'next/navigation'

interface IProps {
  item: IPokemon
}

const PokemonListItem: FC<IProps> = ({item}) => {
  const router = useRouter()

  const gotoPokemon = () => {
    router.push(`/pokemon/${item.id}`)
  }

  return (
    <div
      className={
        cn(
          "p-4 flex items-center gap-4 rounded-xl justify-between relative cursor-pointer",
          "bg-type-" + item.color
        )
      }
      onClick={gotoPokemon}
    >
      <IdBadge id={item.id}/>
      <div className={cn(
        "flex flex-col text-white text-lg font-bold gap-4",
        (item.textBlack ? `text-black` : '')
      )}
      >
        {item.name}
        <PokemonFeatures item={item}/>
      </div>
      <div className={"flex-[0_0_50px]"}>
        <img
          className={"block w-full"}
          src={item.avatar} alt={item.name}/>
      </div>
    </div>
  )
}

export default PokemonListItem