import './App.css';
import Home from "./Components/Home/home";
import Login from "./Components/Login/login";
import Account from "./Contexts/account";
import RouteState from "./Contexts/route";
import {useState} from "react";
import {BrowserRouter} from "react-router-dom";

function App() {
    let [account,setaccount] = useState(localStorage.getItem('account')) ;
    let [route,setroute] = useState("/login") ;
  return (
      <BrowserRouter>
          <RouteState.Provider value={{route,setroute}}>
              <Account.Provider value={{account,setaccount}}>
                  <div className="App">
                      {/*{account!=null ? <Home/> : <Login/>}*/}
                      <Login/>
                  </div>
              </Account.Provider>
          </RouteState.Provider>
      </BrowserRouter>
  );
}

export default App;
