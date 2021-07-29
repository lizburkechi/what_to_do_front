import React from 'react'
import CreateNotes from './CreateNotes'



export default function ActivityCard({ user_id, activity, addNoteToActivity }) {

    const renderNotes = () => {
        return (
         activity.notes.map(note => {
             return <p>{note.content}</p>
         } )   
        )
    }

    return (
        <section className="activity-card">
            <div key={activity.id} className='activity-card'>
                <h2>{activity.activity_name}</h2>
                <p>category: {activity.category}</p>
                <p>participants: {activity.participants}</p>
                <p>link: {activity.link}</p>
                { renderNotes() }
                <CreateNotes activity_id={activity.id} user_id={user_id} addNoteToActivity={addNoteToActivity} />
            </div>        
        </section>
    )
}
