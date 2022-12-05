import "./login.css"

const Page = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (event) => {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({//trqbva da e obekt don't forget
                username:username,
                password:password
            }
            ) 
          });
          return response.json();
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                <div>
                    <title className = "title">Login</title>
                    <label className = "labels">Username</label>
                    <input type="text" className = "input" onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div>
                    <label className = "labels">Password</label>
                    <input type="password" className = "input" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <button className = "submit">Submit</button>
            </form>
        </div>
    )
}

export default Page;