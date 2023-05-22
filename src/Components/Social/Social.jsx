import React from 'react'
import style from "./Social.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Social() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
