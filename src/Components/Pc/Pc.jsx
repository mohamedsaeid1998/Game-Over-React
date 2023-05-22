
import React from 'react'
import style from "./Pc.module.css"
import GameCards from '../GameCards/GameCards'
import { useParams } from 'react-router-dom'


export default function Pc() {
let {type} = useParams()
return <>
<GameCards here={type} />
</>
}