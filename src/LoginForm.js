import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function LoginForm({ setUserId }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/login',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({auth: {username, password}})
        })
        .then(response => response.json())
        .then(json => {
            history.push("/main")
            setUserId(json.id)
        })
        // .then((response) => console.log(response))
    }

    return (
        <div>
            <h2>Please Log In</h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='username-input'>username: </label>
                    <input
                    id="login-username-input" 
                    type="text" 
                    name="username"
                    placeholder='username'  
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    />
                    <label htmlFor='login-password-input'>password: </label>
                    <input
                    id="login-password-input" 
                    type='password' 
                    name='password'
                    placeholder='password' 
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    />
                    <input className='login-input' type='submit' value='Login' />  
            </form>
      </div>  
    )
}
// control username and password
// on form submission make a fetch request to /login
// send response back up to App.js
// set user_id to responses_id