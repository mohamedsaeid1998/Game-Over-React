import React from 'react'
import style from "./Relevance.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Relevance() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="sort-by"  />
  </>
}
