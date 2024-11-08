import styled from "styled-components"
import React, { FC, useEffect, useState } from "react"
import { getCharacters } from "../../shared/api/rickAndMortyAPI"
import { Character } from "../../entities/character/types"
import { CharacterCard } from "../../entities/character"

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

      <ActionContainer>
        <FilterInput
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <SortButton
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort by Name ({sortOrder})
        </SortButton>
      </ActionContainer>

      {sortedCharacters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  max-width: 460px;
  margin: 0 auto;
  padding: 20px 16px;
`

const ActionContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 16px;

  @media (max-width: 460px) {
    flex-direction: column;
  }
`

const FilterInput = styled.input`
  height: 40px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  flex-grow: 1;
`

const SortButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 8px;
  background-color: #646cff;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
`
