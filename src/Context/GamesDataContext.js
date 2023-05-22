import axios from "axios";
import { createContext } from "react";

export let gamesDataContext =  createContext()

export default function GamesDataContextProvider(props){



function getGames(key,platform){

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bc99201aa8mshb61c92cbae95a3dp197cb0jsn698941022b52',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };


  return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?${key}=${platform}`,options)
  .then((response)=>response)
  .catch((error)=>error)
  
}

  return <gamesDataContext.Provider value={{getGames}}>
    {props.children}
  </gamesDataContext.Provider>

}
