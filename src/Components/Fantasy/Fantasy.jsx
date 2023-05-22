import React from 'react'
import style from "./Fantasy.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Fantasy() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
