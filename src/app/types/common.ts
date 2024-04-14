interface IPType {
  name: string
}

export interface IPAbility {
  ability: {
    name: string;
    url: string;
  }
}

export interface IPStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface IRawPokemon {
  name: string;
  abilities: IPAbility[];
  stats: IPStat[];
  types: IPType[];
  sprites: {
    front_default: string
  }
  error?: string;
}


export interface IPokemon {
  id: number;
  name: string;
  url: string;
  types: IPType[];
  avatar: string;
  color: string;
  textBlack: boolean;
  error?: string;
}

export type TJSONResponse = {
  data?: Array<IPokemon|IRawPokemon|{error:string}> | Record<string, unknown>
  error?: string
}