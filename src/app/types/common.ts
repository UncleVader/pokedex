interface IPType {
  name: string
}

interface IPAbility {
  ability: {
    name: string;
    url: string;
  }
}

interface IPStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface IRawPokemon {
  name: string;
  abilities?: IPAbility[];
  stats?: IPStat[];
  sprites: Record<string, string>
}

export interface IPokemon {
  id: number;
  name: string;
  url: string;
  types: IPType[];
  avatar: string;
  color: string;
  textBlack: boolean;
}