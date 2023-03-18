import React from 'react'
import { movies } from '../../dummyArrays'
import List from "../list/List";

const Movies = () => {
  return (
    <List items={movies} />
  )
}

export default Movies