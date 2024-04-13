import {IPokemon} from "@/app/types/common";
import {FC} from "react";
import {cn} from "@/app/lib/utils";

interface IProps {
  item: IPokemon
}

const PokemonFeatures: FC<IProps> = ({item}) => {
  return (
    <>
      {
        item?.types?.length &&
        <ul className={"flex gap-2 items-center flex-wrap"}>
          {item.types.map(t => (
            <li
              key={t.name}
              className={
                cn(
                  "font-normal text-sm px-3 py-1 rounded-3xl",
                  (item.textBlack ? "bg-black-a2" : "bg-white-100")
                )}
            >{t.name}</li>
          ))}
        </ul>
        || null
      }
    </>
  )
}

export default PokemonFeatures