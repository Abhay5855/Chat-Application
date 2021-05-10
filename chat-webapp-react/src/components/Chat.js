import React,{ useState, useEffect } from 'react'
import './Chat.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useParams } from 'react-router-dom'
import db from '../Firebase'
import Message from "./Message";
function Chat() {

    const { roomId } = useParams();

    const [roomDetails, setRoomDetails] = useState(null);

    const [roomMessages,setRoomMessages] = useState([]);


     useEffect(() => {

        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => {

                setRoomDetails(snapshot.data())

            })
        }


        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot( snapshot =>
            
            setRoomMessages(
                snapshot.docs.map(doc=>doc.data())
            )
        )
         

     },[roomId]);

     


    console.log(roomDetails);
    console.log('Messages >>>' , roomMessages);


      




    return (
        <div className="chat">

       

        <div className="chat__header">

            
            <div className="chat__headerleft">

            <h4 className="chat__channelName">
                <strong>#{roomDetails?.name}</strong>

                <StarBorderIcon />

                
            </h4>

            </div>

           <div className="chat__messages">
               {
                   roomMessages.map(({ message,timestamp,userimage,user }) => {
                       return (
                           < Message 

                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userimage={userimage}




                           />
                       )
                   })
               }
           </div>
        </div>    



            
        </div>
    )
}

export default Chat
