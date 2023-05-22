import React from 'react'
import style from "./Alphabetical.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'

export default function Alphabetical() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="sort-by"  />
  </>
}
