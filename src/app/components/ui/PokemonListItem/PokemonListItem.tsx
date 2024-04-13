import {FC} from "react";
import {IPokemon} from "@/app/types/common";
import {cn} from "@/app/lib/utils";

interface IProps {
  item: IPokemon
}

const PokemonListItem:FC<IProps> = ({item}) => {

  return(
    <div
      className={cn("p-4 flex items-center gap-4","bg-type-"+item.color)}
    >
      <div className={"flex flex-col"}>
        {item.name}

      </div>
      <img src={item.avatar} alt={item.name}/>
    </div>
  )
}

export default PokemonListItem