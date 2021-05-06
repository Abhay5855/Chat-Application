import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  console.log(input);
  console.log(messages);
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
        return <p>{msg}</p>;
      })}
    </Container>
  );
}

const Container = styled.div``;

export default Chat;
