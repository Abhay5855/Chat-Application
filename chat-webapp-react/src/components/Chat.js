import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import Messages from "../components/Messages";
import db from "../Firebase";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
   
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);


  useEffect(() => {

    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc=> doc.data()))
    })

  },[])

  const sendMessage = (e) => {
    e.preventDefault();
    
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
        return <Messages username={username} msg={msg} />;
      })}
    </Container>
  );
}

const Container = styled.div``;

export default Chat;
