import React, { useContext, useEffect, useState } from 'react'
import style from "./GameDetails.module.css"
import { gameDetailsContext } from '../../Context/GamesDetailsContext'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'

export default function GameDetails() {

let {id}=useParams()

  useEffect(()=>{
    gameInformation(id)
  },[])

  const [gameInfo, setGameInfo] = useState(null)
  let {gameDetails} = useContext(gameDetailsContext)
  const [MyBackgroundImage, setMyBackgroundImage] = useState("");

async function gameInformation(id) {
  let gameInfos = await gameDetails(id)
  setGameInfo(gameInfos.data)
  setMyBackgroundImage(gameInfos?.data?.thumbnail?.replace("thumbnail", "background"))
console.log(gameInfos);
}


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};




return <>
{gameInfo?<div className='background' style={{
            backgroundImage: `url(${MyBackgroundImage})`,
          }}
        >

  <div className="container mt-5">

<div className="row pt-5">
<div key={gameInfo?.id} className="col-md-4 ">
    <figure className='position-relative'>
    <video className="w-100  position-relative top-0 start-0 z-3" id='video' autoPlay  src={(gameInfo.thumbnail.replace("thumbnail.jpg","videoplayback.webm"))}  loop muted />

        <img src={gameInfo?.thumbnail} className="w-100 position-absolute start-0 opacity" alt="" />




    </figure>
    <Link to={gameInfo?.game_url} target='_blank'>
    <button className="btn btn-primary fw-bold cursor text-white w-100 mt-2">Play Now  <i className="fa-solid fa-gamepad"></i></button> 

</Link>

  </div>
  <div className="text-center text-sm-start col-md-8 ">
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-1">
          <li className="breadcrumb-item text-info"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item " aria-current="page">{gameInfo?.title}</li>
        </ol>
      </nav>
      <div>
      <h1 className='text-light'>{gameInfo?.title}</h1>
        <h3>About {gameInfo?.title}</h3>
        <p>{gameInfo?.description}</p>
      </div>

      {gameInfo?.minimum_system_requirements?.graphics? <div>
        <h3 className=" text-capitalize  text-warning ">minimum system requirements :-</h3>
        <p><span className="h5 fw-bold">Graphics : </span>{gameInfo?.minimum_system_requirements?.graphics}</p>
        <p><span className="h5 fw-bold">Memory : </span>{gameInfo?.minimum_system_requirements?.memory}</p>
        <p><span className="h5 fw-bold">Os : </span>{gameInfo?.minimum_system_requirements?.os}</p>
        <p><span className="h5 fw-bold">Processor : </span>{gameInfo?.minimum_system_requirements?.processor}</p>  
        </div> :null}


        <div>
      <h4 className='h3 text-primary'>{gameInfo?.title} ScreenShots:-</h4>
      <Slider {...settings}>
      {gameInfo?.screenshots.map((img)=><img key={img.id} src={img.image} className="w-100" alt=""/>)}
      </Slider>
      </div>
      <h5 className='h3 text-info my-3'>Additional Information :-</h5>
      <div className="row">
        <div className="col-md-4">
          <span className='text-muted'>Title</span>
          <p>{gameInfo?.title}</p>
        </div>
        <div className="col-md-4">
          <span className='text-muted'>Developer</span>
          <p>{gameInfo?.developer}</p>
        </div>
        <div className="col-md-4">
          <span className='text-muted'>Publisher</span>
          <p>{gameInfo?.publisher}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <span className='text-muted'> Release Date</span>
          <p>{gameInfo?.release_date}</p>
        </div>
        <div className="col-md-4">
          <span className='text-muted'>Genre</span>
          <p>{gameInfo?.genre}</p>
        </div>
        <div className="col-md-4">
          <span className='text-muted'>Platform</span>
          
          <p>{gameInfo?.platform === "Web Browser" ?<i className="fab fa-windows text-muted m-2"></i> : <i className="me-2 fas fa-window-maximize text-muted "></i>}{gameInfo?.platform}</p>
        </div>
      </div>
    </div>
  </div>


</div>
  
</div>
</div>:null}
  </>
}
