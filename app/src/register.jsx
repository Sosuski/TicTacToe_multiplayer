import "./register.css"
import {useState} from 'react';

const Page = () => {
    // event se podava pri onChange i ima stoinost za napravenite promeni
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (event) => {
        const response = await fetch('http://localhost:8000/register', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({//trqbva da e obekt don't forget
                username:username,
                password:password
            }
                /*event.target.user.value*/,
                /*event.target.pass.value*/
            ) 
          });
          
          return response.json();
    }
    return (
        <div>
            <form onSubmit={(event)=>{handleSubmit(event);/*console.log(event.target.user.value)*/}}>
                <div>
                <title className = "title">Register</title>
                <label className = "labels">Username</label>
                    <input type="text" className = "input" onChange={(e) => { /*console.log(e);*/ setUsername(e.target.value)}}/>
                </div>
                <div>
                <label className = "labels">Password</label>
                <input type="password" className = "input" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <button className = "submit">Submit</button>
            </form>
            <div>
                
            </div>
        </div>
    )
} //asd

export default Page;