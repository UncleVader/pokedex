import {IPAbility, IPStat} from "@/app/types/common";
import {FC} from "react";

interface IProps {
  stats: IPStat[]
}
const PokemonStats:FC<IProps> = ({stats}) => {
  return(
    <div className={"flex flex-col gap-2"}>
      <h2>Stats:</h2>
      <ul>
        {stats.map((s, i) => (
            <li key={i}>
              <a
                href={s.stat.url}
                target="_blank"
                className={"hover:underline"}
              >{s.stat.name} - {s.base_stat}</a>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default PokemonStats