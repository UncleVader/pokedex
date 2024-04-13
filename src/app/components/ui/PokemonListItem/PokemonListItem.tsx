import {FC} from "react";
import {IPokemon} from "@/app/types/common";
import {cn} from "@/app/lib/utils";
import PokemonFeatures from "@/app/components/ui/PokemonListItem/PokemonFeatures";
import IdBadge from "@/app/components/ui/PokemonListItem/IdBadge";

interface IProps {
  item: IPokemon
}

const PokemonListItem: FC<IProps> = ({item}) => {

  return (
    <div
      className={
        cn(
          "p-4 flex items-center gap-4 rounded-xl justify-between relative",
          "bg-type-" + item.color
        )}
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