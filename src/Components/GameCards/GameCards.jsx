import React, { useContext, useEffect, useState } from 'react'
import style from "./GameCards.module.css"
import { gamesDataContext } from '../../Context/GamesDataContext'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'




export default function GameCards({k,here}) {
    
    
    const [gameCards, setGameCards] = useState(null)
    let {getGames} = useContext(gamesDataContext)
    
    
    async function gameData(k,here){
    let gameCard = await getGames(k,here)
    setGameCards(gameCard.data.splice(0,20))
    console.log(gameCard.data);
    }
    
    useEffect(()=>{
      gameData(k,here)
      },[])
    



      return <>
      {gameCards?<div className="container my-5 pt-5">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 ">
      {gameCards?.map((game)=> <div key={game.id} className="col ">
<div className="card game    bg-transparent shadow">
<Link to={`/gameDetails/${game.id}`}>
      <div className="card-body cursor">

      <figure className="position-relative">
        <img className="card-img-top object-fit-cover w-100" src={game.thumbnail} alt='' />
      </figure>

      <figcaption>
        <div className=" hstack justify-content-between">
          <h3 className="h6 small">{game.title} </h3>
          <span className="badge text-bg-primary p-2">Free</span>
        </div>
    <p className="card-text small text-center opacity-50">
    {game.short_description.slice(0,80)}...
    </p>
      </figcaption>
  </div>
  </Link>
  <footer className="card-footer small hstack justify-content-between">
        <span className="badge bg-danger">{game.genre}</span>
        <span className="badge">{game.platform !== "Web Browser" ?<i className="fab fa-windows text-muted  fs-4"></i> : <i className=" fas fa-window-maximize text-muted fs-4"></i>}</span>
  </footer>
  </div>
    </div>)}


  
  </div>
  </div>:<Loading/>}
</>
}
