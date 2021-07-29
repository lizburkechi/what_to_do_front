import React from 'react'
import LoginForm from './LoginForm'

export default function Header({ setUserId }) {
    return (
        <header>
            <h1>Header</h1>
            <LoginForm setUserId={setUserId} />
        </header>
    )
}
