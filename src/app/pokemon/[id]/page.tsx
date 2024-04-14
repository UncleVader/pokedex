'use client'
import usePokemon from "@/app/pokemon/[id]/usePokemon";
import Image from "next/image";

export default function Page({params: {id}}: {
  params: { id: string }
}) {
  const {isLoading, error, data} = usePokemon(+id)

  return (
    <main className="flex min-h-screen flex-col p-8 bg-main-bg gap-8">
      {
        isLoading && <>Loading...</> ||
        error && <>Error: {error}</> ||
        data &&
        <div className={"border rounded-xl p-6 w-[500px] max-w-full mx-auto flex flex-wrap sm:flex-nowrap"}>
          <div className="flex flex-col">
            <h1 className={"mb-4"}>{data.name}</h1>

            <div className="flex gap-4">
              {data?.abilities?.length &&
                <div className={"flex flex-col gap-2"}>
                  <h2>Abilities:</h2>
                  <ul>
                    {data.abilities.map((a, i) => (
                      <li key={i}><a href={a.ability.url} target="_blank">{a.ability.name}</a></li>
                    ))
                    }
                  </ul>
                </div>
              }

              {data?.stats?.length &&
                <div className={"flex flex-col gap-2"}>
                  <h2>Stats:</h2>
                  <ul>
                    {data.stats.map((s, i) => (
                        <li key={i}><a href={s.stat.url} target="_blank">{s.stat.name} - {s.base_stat}</a></li>
                      )
                    )}
                  </ul>
                </div>
              }
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

        </div> ||
        <>No Pokemon data</>
      }
    </main>
  )
}