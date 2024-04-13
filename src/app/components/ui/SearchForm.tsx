'use client'
import {useEffect, useState} from "react";
import Form from "@/app/components/radix/Form";
import FormField from "@/app/components/radix/FormField";
import useStore from "@/app/store";


const SearchForm = () => {
  const [searchText, setSearchText] = useState('')
  const pokemons = useStore(s => s.pokemons)
  const setFiltered = useStore(s => s.setFiltered)

  useEffect(() => {
    if (!searchText) {
      setFiltered(pokemons)
    } else {
      setFiltered(pokemons.filter(p => p.name.indexOf(searchText)>=0))
    }
  },[searchText])

  return(
    <Form>
      <FormField name={"search"}>
        <input
          type="text"
          id="search"
          placeholder={"Search 120 Pokemon"}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </FormField>
    </Form>
  )
}

export default SearchForm