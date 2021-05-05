import React from 'react'
// import { useState } from "react";
import styled from "styled-components";
import {useState} from "react";
function Chat() {


    const [input,setInput] = useState('');
    const [messages,setMessages] = useState([]);


    const sendMessage = (e) => {
        setMessages([...messages,input]);
        setInput('');
    }

    console.log(input);
    console.log(messages);
    return (
        
        <Container>
           <input value={input} onChange={e => setInput(e.target.value)}/>
           <button onClick={sendMessage}>Send Text</button>
        </Container>
       


            
        
    )
}


const Container = styled.div``;









export default Chat
