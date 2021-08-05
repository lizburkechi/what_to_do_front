import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <div>
                <br/>
                <img className="key" src="/images/key.png" alt="skeleton key"/>
                <br/>
                <p className="about"> The purpose of this application is to provide a user oriented activity finder with a focus on accessibility. Accessibility to many people is usually only considered in terms of mobility, when in actuality there are many categories of disability. 
                <br/>
                <br/>
                Some are invisible to the naked eye and often are not considered in terms of accessible spaces. It is not legally required for businesses to be fully accessible, and a company's level of accessibility is often incorrectly emphasized to suggest a more inclusive space. This is frustrating, disappointing and in cases humilating for our friends, family and community who live in a world that does not value accessibility and inclusion.
                <br/>
                <br/> 
                This application is a way for users to report overlooked or innacurately reported details of companies to provide a platform for users to have a better idea of situations that they might find themselves in, without having to find out by means of trial and error.</p>
            </div>
            <br/>
            <div>
                <Link to="/login">Login</Link>
            </div>  
        </div>
    )
}
