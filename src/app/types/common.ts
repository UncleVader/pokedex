interface IPType {
  name: string
}

export interface IPokemon {
  id: number;
  name: string;
  url: string;
  types: IPType[];
  avatar: string;
  color: string
}