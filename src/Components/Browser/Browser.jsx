import React from 'react'
import style from "./Browser.module.css"
import { useParams } from 'react-router-dom'
import GameCards from '../GameCards/GameCards'

export default function Browser() {
let {type} = useParams()
return <>
<GameCards  k="platform" here={type} />
</>
}