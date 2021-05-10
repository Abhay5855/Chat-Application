import "./App.css";
import { useState } from "react";
// import Chat from "./components/Chat";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState();

  return (
    //BEM naming convention
    <>
    <div className="App">
      <Router>

      {!user ? (
        < Login />
      ) : (
        
        <>
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>

            <Route path="/">
              <h1>Welcome User</h1>
            </Route>
          </Switch>
        </div>
        </>
        )}
      </Router>
    </div>
    </>
  );
}

export default App;
