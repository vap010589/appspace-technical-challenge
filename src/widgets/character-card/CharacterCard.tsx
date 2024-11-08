import React, { FC } from "react"
import { Link } from "react-router-dom"
import { Character } from "../../entities/character/types"

type Props = {
  character: Character
}

export const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`}>
      <div>
        <h3>{character.name}</h3>
        <img src={character.image} alt={character.name} />
      </div>
    </Link>
  )
}
