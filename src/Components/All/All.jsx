
import React, { useContext, useEffect, useState } from 'react'
import style from "./All.module.css"
import { gamesDataContext } from '../../Context/GamesDataContext'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function All() {

useEffect(()=>{
gameData("all")

},[])


const [gameCards, setGameCards] = useState(null)
const [gameCard, setGameCard] = useState(null)
let {getGames} = useContext(gamesDataContext)


async function gameData(gameType){
let gameCard = await getGames(gameType)
setGameCards(gameCard.data)
setGameCard(gameCard.data.splice(0,3))
console.log(gameCard.data);
}


// { const videoPath =gameCards.thumbnail.replace("thumbnail.jpg","videoplayback.webm")}
return <>
{gameCards?<div className="container my-5 ">

<h2 className='pt-5 '>Top Free Mmorpg Games For PC And Browser In 2023!</h2>
<div className="row g-4 mb-4">
      {gameCard?.map((game)=> <div key={game.id} className="col-md-4 mt-5">
        <div className="card game h-100 " role="button">
          <Link to={`/gameDetails/${game.id}`}> 

          <figure className="position-relative mb-0 ">
            <img className="card-img-top object-fit-cover h-100" src={game?.thumbnail} alt='' />
            <div className='position-absolute bottom-0 end-0 m-2'>
            <button className=" badge bg-blue p-2 text-white"> Free</button>
            </div>
          </figure>
        </Link>
      </div>
    </div>
    )}
  </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 g-5 ">
      {gameCards?.map((game)=> <div key={game.id} className="col ">
      <Link to={`/gameDetails/${game.id}`}> 
<div className="card game  h-100  bg-transparent shadow">
      <div className="card-body">

      <figure className="position-relative">
        <img className="card-img-top object-fit-cover w-100" src={game.thumbnail} alt='' />
      </figure>

      <figcaption>
        <div className=" hstack justify-content-between">
          <h3 className="h6 small">{game.title} </h3>
          <span className="badge text-bg-primary p-2">Free</span>
        </div>
    <p className="card-text small text-center opacity-50">
    {game.short_description.slice(0,100)}...
    </p>
      </figcaption>
  </div>
  <footer className="card-footer small hstack justify-content-between">
        <span className="badge bg-danger">{game.genre}</span>
        <span className="badge">{game.platform !== "Web Browser" ?<i className="fab fa-windows text-muted  fs-4"></i> : <i className=" fas fa-window-maximize text-muted fs-4"></i>}</span>
  </footer>
  </div>
  </Link>
    </div>)}

    
  </div>
  </div>:<Loading/>}
</>
}