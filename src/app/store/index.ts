import {create} from "zustand"
import {IPokemon} from "@/app/types/common";
import {getPokemons} from "@/app/lib/api";

interface IState {
  pokemons: IPokemon[];
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  pokemons: [],
  isLoading: false,
  error: ''
}


interface IActions {
  init: () => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string) => void;
  setPokemons: (pokemons: IPokemon[]) => void;
}

type TStore = IState & IActions;


const useStore = create<TStore>((set, get) =>
  ({
    ...initialState,

    init: async () => {
      get().setIsLoading(true)
      const data = await getPokemons()
      if (data.error) {
        set(state => ({...state,error: data.error}))
      } else {
        set(state => ({...state,pokemons: data}))
      }
      get().setIsLoading(false)
    },
    setIsLoading: (isLoading) => {
      set((state) => ({...state, isLoading}))
    },
    setError: (error) => {
      set((state) => ({...state, error}))
    },
    setPokemons: (pokemons) => {
      set((state) => ({...state, pokemons}))
    },
  })
)


export default useStore
