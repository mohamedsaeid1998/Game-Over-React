import React from 'react'
import style from "./Racing.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'
export default function Racing() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="category"  />
  </>
}
