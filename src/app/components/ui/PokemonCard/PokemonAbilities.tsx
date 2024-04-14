import {IPAbility} from "@/app/types/common";
import {FC} from "react";

interface IProps {
  abilities: IPAbility[]
}
const PokemonAbilities:FC<IProps> = ({abilities}) => {
  return(
    <div className={"flex flex-col gap-2"}>
      <h2>Abilities:</h2>
      <ul>
        {abilities.map((a, i) => (
          <li key={i}>
            <a
              href={a.ability.url}
              target="_blank"
              className={"hover:underline"}
            >{a.ability.name}</a>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default PokemonAbilities