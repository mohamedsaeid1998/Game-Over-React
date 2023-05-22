import React from 'react'
import style from "./Sports.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Sports() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
