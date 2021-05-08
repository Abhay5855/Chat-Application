import "./App.css";
// import Chat from "./components/Chat";
import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
function App() {
  return (

    //BEM naming convention
    <div className="App">
      
        <Container>

        {/* Header */}
        < Header />
        {/* sidebar */}
        < Sidebar />
        {/* react-router -> chat screen */}
         
              {/* <Chat /> */}
            
        </Container>
     
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export default App;
