import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import Messages from "../components/Messages";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {username:'Abhay' , text:'Loves Heena'},
    {username:'Heena' , text:'Loves Abhay'}
  ]);
  const [username, setUsername] = useState("");


 useEffect(() => {
     
  setUsername(prompt('Enter your name'))
 },[])

  

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, {username: username, text:input}]);
    setInput("");
  };

 
  return (
    <Container>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Text
          </Button>
        </FormControl>
      </form>

      {messages.map((msg) => {
        return <Messages username={msg.username}  text={msg.text} />;
      })}
    </Container>
  );
}

const Container = styled.div``;

export default Chat;
