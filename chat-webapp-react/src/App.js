import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Switch>
            <Route path="/room">
              <Chat />
            </Route>
            <Route path="/">Login</Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
