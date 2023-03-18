import React from 'react'
import { videos } from '../../dummyArrays'
import List from "../list/List";

const Home = () => {
  return (
    <List items={videos} />
  )
}

export default Home
