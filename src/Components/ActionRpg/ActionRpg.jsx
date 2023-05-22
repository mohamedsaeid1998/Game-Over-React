import React from 'react'
import style from "./ActionRpg.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function ActionRpg() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
