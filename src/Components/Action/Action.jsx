import React from 'react'
import style from "./Action.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Action() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
