import React from 'react'
import style from "./Shooter.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Shooter() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
