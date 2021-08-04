import React from 'react'
import LoginForm from './LoginForm'

export default function Login({ setUserId }) {
    return (
        <header>
            <LoginForm setUserId={setUserId} />
        </header>
    )
}
