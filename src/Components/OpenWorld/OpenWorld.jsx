import React from 'react'
import style from "./OpenWorld.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function OpenWorld() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
