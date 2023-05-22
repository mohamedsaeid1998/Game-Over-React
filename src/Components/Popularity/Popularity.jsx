import React from 'react'
import style from "./Popularity.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Popularity() {  
  let {type} = useParams()
  return <>
  <GameCards here={type} k="sort-by"  />
  </>
}
