import React from 'react'
import style from "./Flight.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Flight() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
