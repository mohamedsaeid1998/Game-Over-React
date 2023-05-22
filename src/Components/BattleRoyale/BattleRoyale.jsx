import React from 'react'
import style from "./BattleRoyale.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'

export default function BattleRoyale() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
