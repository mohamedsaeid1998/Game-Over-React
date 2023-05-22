import axios from "axios";
import { createContext } from "react";

export let gameDetailsContext = createContext()

export default function GameDetailsContextProvider(props) {

function gameDetails(id){

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bc99201aa8mshb61c92cbae95a3dp197cb0jsn698941022b52',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };


return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
.then((response)=>response)
.catch((error)=>error)
}

return <gameDetailsContext.Provider value={{gameDetails}}>
  {props.children}
</gameDetailsContext.Provider>

}




