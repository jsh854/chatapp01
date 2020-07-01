import React,{useEffect,useState} from 'react';
import './join.css'
import { Link } from 'react-router-dom';
const Join = ()=>{
    const [name,changeName] = useState('');
    const [room,changeRoom]=useState('')
    useEffect(()=>{
    
    },[])
    const Join=()=>{
        localStorage.setItem("name",name);
        localStorage.setItem("room",room);
    }
    return(
<div className="joinOuterContainer">
<div className="joinInnerContainer">
    <h1 className="heading">Join the chatrooms</h1>
    <div>
        <input type="text" placeholder="enter your name" className="joinInput" onChange={(e)=>changeName(e.target.value)}/>
    </div>
    <div>
        <input type="text" placeholder="enter Room name" className="joinInput mt-20" onChange={(e)=>changeRoom(e.target.value)}/>
    </div>
 
        <button className="button mt-20" type="submit" onClick={Join}>
      <Link to="/chat">Join Now</Link>
        </button>
    
    </div>    
</div>
    )
}

export default Join;