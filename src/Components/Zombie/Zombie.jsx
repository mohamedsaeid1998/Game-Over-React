import React from 'react'
import style from "./Zombie.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Zombie() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
