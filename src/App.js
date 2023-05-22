
import "./App.css";
import Register from "./Components/Register/Register";
import { RouterProvider, createBrowserRouter, createHashRouter} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import All from "./Components/All/All";
import Home from "./Components/Home/Home";
import Pc from "./Components/Pc/Pc";
import Browser from "./Components/Browser/Browser";
import NotFound from "./Components/NotFound/NotFound";
import Release from "./Components/Release/Release";
import Popularity from "./Components/Popularity/Popularity";
import Alphabetical from "./Components/Alphabetical/Alphabetical";
import Relevance from "./Components/Relevance/Relevance";
import Racing from "./Components/Racing/Racing";
import Sports from "./Components/Sports/Sports";
import Social from "./Components/Social/Social";
import Shooter from "./Components/Shooter/Shooter";
import OpenWorld from "./Components/OpenWorld/OpenWorld";
import Zombie from './Components/Zombie/Zombie';
import Fantasy from './Components/Fantasy/Fantasy';
import ActionRpg from "./Components/ActionRpg/ActionRpg";
import Action from './Components/Action/Action';
import Flight from './Components/Flight/Flight';
import BattleRoyale from "./Components/BattleRoyale/BattleRoyale";
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import GamesDataContextProvider from "./Context/GamesDataContext";
import GameDetailsContextProvider from "./Context/GamesDetailsContext";
import GameDetails from './Components/GameDetails/GameDetails';






function App() {


  useEffect(()=>{
    if(localStorage.getItem("userToken")!==null){
      userData()
    }
  },[])

const [token, setToken] = useState(null)

  function userData(){
    let enCodedToken = localStorage.getItem("userToken")
    let deCodedToken = jwtDecode(enCodedToken)
    setToken(deCodedToken)
  }



  let routers = createHashRouter([
    {
      path: "",
      element: <Layout setToken={setToken} token={token}/>,
      children: [
        { index: true, element:<ProtectedRoute><Home/></ProtectedRoute> },
        { path: "all", element:<ProtectedRoute><All/></ProtectedRoute> },
        { path: "pc/:type", element: <ProtectedRoute><Pc/></ProtectedRoute>},
        { path: "browser/:type", element: <ProtectedRoute><Browser/> </ProtectedRoute> },
        { path: "release/:type", element: <ProtectedRoute><Release/></ProtectedRoute> },
        { path: "popularity/:type", element: <ProtectedRoute> <Popularity/> </ProtectedRoute>},
        { path: "alphabetical/:type", element: <ProtectedRoute> <Alphabetical/> </ProtectedRoute> },
        { path: "relevance/:type", element: <ProtectedRoute> <Relevance/> </ProtectedRoute> },
        { path: "racing/:type", element: <ProtectedRoute> <Racing/> </ProtectedRoute>},
        { path: "sports/:type", element: <ProtectedRoute> <Sports/> </ProtectedRoute> },
        { path: "social/:type", element: <ProtectedRoute> <Social/> </ProtectedRoute>},
        { path: "shooter/:type", element: <ProtectedRoute>  <Shooter /> </ProtectedRoute>},
        { path: "openWorld/:type", element: <ProtectedRoute> <OpenWorld />  </ProtectedRoute>},
        { path: "zombie/:type", element: <ProtectedRoute> <Zombie/> </ProtectedRoute>},
        { path: "fantasy/:type", element:  <ProtectedRoute> <Fantasy/> </ProtectedRoute>},
        { path: "actionRpg/:type", element: <ProtectedRoute> <ActionRpg/> </ProtectedRoute>},
        { path: "action/:type", element: <ProtectedRoute> <Action/>  </ProtectedRoute>},
        { path: "flight/:type", element: <ProtectedRoute> <Flight/> </ProtectedRoute>},
        { path: "battleRoyale/:type", element: <ProtectedRoute> <BattleRoyale /> </ProtectedRoute>},
        { path: "gameDetails?/:id", element: <ProtectedRoute> <GameDetails /> </ProtectedRoute>},
        { path: "login", element: <Login userData={userData} /> },
        { path: "register", element: <Register /> },
        { path: "logout", element: <Logout /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);



  return (
    <>
    <GameDetailsContextProvider>
    <GamesDataContextProvider>
    <RouterProvider router={routers} />
    </GamesDataContextProvider>
    </GameDetailsContextProvider>

    </>
  );
}

export default App;
