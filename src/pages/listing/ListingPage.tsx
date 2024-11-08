import styled from "styled-components"
import React, { FC, useEffect, useState } from "react"
import { getCharacters } from "../../shared/api/rickAndMortyAPI"
import { Character } from "../../entities/character/types"
import { CharacterCard } from "../../entities/character/ui/CharacterCard"

export const ListingPage: FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [filter, setFilter] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")

  useEffect(() => {
    getCharacters({ name: filter }).then((res) =>
      setCharacters(res.data.results)
    )
  }, [filter])

  const sortedCharacters = [...characters].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  )

  return (
    <Container>
      <h1>Character Listing</h1>
      <FilterInput
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort by Name ({sortOrder})
      </button>
      <div>
        {sortedCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 460px;
  margin: 0 auto;
  padding: 20px;
`

const FilterInput = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
