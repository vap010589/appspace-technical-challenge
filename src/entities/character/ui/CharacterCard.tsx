import React, { FC } from "react"
import styled from "styled-components"
import { Character } from "../types"
import { Link } from "react-router-dom"

type Props = {
  character: Character
}

export const CharacterCard: FC<Props> = ({ character }) => (
  <Card>
    <Link to={`/character/${character.id}`}>
      <h5>{character.name}</h5>
      <img src={character.image} alt={character.name} width="150" />
    </Link>
  </Card>
)

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
`
