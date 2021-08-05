import React from 'react'
import LoginForm from './LoginForm'

export default function Login({ setUserId }) {
    return (
        <section className='login-page'>
            <LoginForm setUserId={setUserId} />
        </section>
    )
}
