import React from 'react'
import { Card, CardContent, Typography} from "@material-ui/core";
import "./Message.css";
function Messages({msg , username}) {
    const isUser = username === msg.username;
    return (

        <div className={`msg ${isUser && 'message_card'}`}>
        <Card className={isUser ? "message_userCard" : "message_guessCard"}>

        <CardContent>
            <Typography
            color="white"
            variant="h5"
            component="h2">
 
             {msg.username}:{msg.msg}

            </Typography>
        </CardContent>

        </Card>
        </div>
    )
}

export default Messages
