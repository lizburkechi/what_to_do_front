import React from 'react';
import {useState} from 'react';

export default function LoginForm({ setUserId }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
        .then(json => setUserId(json.id))
        // .then((response) => console.log(response))
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className='form-inner'>
                <h2>Login</h2>
                <h4>(Dont forget to log in to persist notes)</h4>
                <div className='form-group'>
                    <label htmlFor='username'>username:</label>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder='username' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>password:</label>
                    <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
                </div>
                <input type='submit' value='login' />
            </div>
        </form>
    )
}
// control username and password
// on form submission make a fetch request to /login
// send response back up to App.js
// set user_id to responses_id