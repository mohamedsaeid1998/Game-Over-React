import React, { useContext, useEffect, useState } from 'react'
import style from "./Home.module.css"
import { gamesDataContext } from '../../Context/GamesDataContext'

import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function Home() {

useEffect(()=>{
gameData("pc")
},[])


const [gameCards, setGameCards] = useState(null)
let {getGames} = useContext(gamesDataContext)


async function gameData(gameType){
let gameCard = await getGames(gameType)
setGameCards(gameCard.data.splice(0,3))

}


return <>

{gameCards?<section>
  <div className={`text-center mt-5  ${style.img}`} >
<div className="container-fluid p-4">
  <h1 className='display-5 fw-bold'>Find & track the best <span className='text-primary display-5 fw-bold'>free-to-play</span> games!</h1>
  <p className='text-muted h4 fw-light'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
  <Link to={"/browser/browser"} className='btn btn-outline-secondary mt-3 btn-lg'>Browser Games</Link>
</div>
</div>






{gameCards?<div className="container mb-5">
    <div className="row mt-3 g-4">
      <h3><i className="fa-solid fa-robot me-2"></i> Personalized Recommendations :-</h3>
      {gameCards?.map((game)=> <div key={game.id} className="col-md-4 mt-5">
        <div className="card game h-100 " role="button">
          <Link to={`/gameDetails/${game.id}`}> 

          <figure className="position-relative ">
            <img className="card-img-top object-fit-cover h-100" src={game?.thumbnail} alt='' />
            
          </figure>
          <div className='card-body  d-flex align-items-center justify-content-between'>
              <h4>{game.title}</h4>
              <button className=" badge bg-blue p-2 text-white"> Free</button>
          </div>
        
        </Link>
      </div>
    </div>
    )}
  </div>
  </div>:null}
  </section> :<Loading/>}
</>
}

