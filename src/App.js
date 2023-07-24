import './App.css';
import Home from "./Components/Home/home";
import Login from "./Components/Login/login";
import Account from "./Contexts/account";
import {useState} from "react";
function App() {
    let [account,setaccount] = useState(localStorage.getItem('account'))
  return (
      <Account.Provider value={{}}>
          <div className="App">
              {account!=null ? <Home/> : <Login/>}
          </div>
      </Account.Provider>
  );
}

export default App;
