import Image from "next/image";
import {IRawPokemon} from "@/app/types/common";
import {FC} from "react";
import PokemonAbilities from "@/app/components/ui/PokemonCard/PokemonAbilities";
import PokemonStats from "@/app/components/ui/PokemonCard/PokemonStats";

interface IProps {
  data: IRawPokemon
}
const PokemonCard:FC<IProps> = ({data}) => {
  return(
    <div className={"border rounded-xl p-6 w-[600px] max-w-full mx-auto flex flex-wrap sm:flex-nowrap bg-white"}>
      <div className="flex flex-col">
        <h1 className={"mb-4"}>{data.name}</h1>
        <div className="flex gap-4 p-2 border rounded-xl">
          {data?.abilities?.length && <PokemonAbilities abilities={data.abilities}/>}
          {data?.stats?.length && <PokemonStats stats={data.stats} />}
        </div>
      </div>

      <div className="p-4">
        <Image
          width={200}
          height={200}
          src={data.sprites.front_default}
          alt={data.name}
        />
      </div>

    </div>
  )
}

export default PokemonCard