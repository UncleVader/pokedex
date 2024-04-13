import SearchForm from "@/app/components/ui/SearchForm";
import PokemonsList from "@/app/components/ui/PokemonsList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 bg-main-bg">
      <div className="flex justify-between items-center">
        <h1>Pokedex</h1>
        <SearchForm />
      </div>

      <PokemonsList />
    </main>
  );
}

