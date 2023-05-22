import React from 'react'
import style from "./Release.module.css"
import { useParams } from 'react-router-dom';
import GameCards from '../GameCards/GameCards';

export default function Release() {
  let {type} = useParams()
  return <>
  <GameCards here={type} k="sort-by"  />
  </>
}
