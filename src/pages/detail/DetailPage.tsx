import React, { FC, useEffect, useState } from "react"
import styled from "styled-components"

import { useParams } from "react-router-dom"
import { getCharacterById } from "../../shared/api/rickAndMortyAPI"
import { Character } from "../../entities/character/types"

export const DetailPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const [character, setCharacter] = useState<Character | null>(null)

  useEffect(() => {
    if (id) getCharacterById(Number(id)).then((res) => setCharacter(res.data))
  }, [id])

  if (!character) return <div>Loading...</div>

  return (
    <Container>
      <Card>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} width="200" />
        <p>Species: {character.species}</p>
        <p>Status: {character.status}</p>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  max-width: 460px;
  margin: 0 auto;
  padding: 20px 16px;
`

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
`
