import {create} from "zustand"
import {IPokemon} from "@/app/types/common";

interface IState {
  pokemons: IPokemon[];
  filtered: IPokemon[];
  page: number;
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  pokemons: [],
  filtered: [],
  page: 0,
  isLoading: false,
  error: ''
}


interface IActions {
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string) => void;
  setPokemons: (pokemons: IPokemon[]) => void;
  setFiltered: (filtered: IPokemon[]) => void;
  setPage: (page: number) => void;
}

type TStore = IState & IActions;


const useStore = create<TStore>((set, get) =>
  ({
    ...initialState,

    setIsLoading: (isLoading) => {
      set((state) => ({...state, isLoading}))
    },
    setError: (error) => {
      set((state) => ({...state, error}))
    },
    setPokemons: (pokemons) => {
      set((state) => ({...state, pokemons, filtered: pokemons}))
    },
    setFiltered: (filtered) => {
      set((state) => ({...state, filtered}))
    },
    setPage: (page) => {
      set((state) => ({...state, page}))
    },
  })
)


export default useStore
