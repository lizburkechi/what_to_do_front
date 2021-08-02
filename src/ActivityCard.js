import React from 'react'
import CreateNotes from './CreateNotes'
import NotesContainer from './NotesContainer'



export default function ActivityCard({ user_id, activity, addNoteToActivity, deleteNoteFromActivity }) {


    return (
        <section className="activity-card">
            <div key={activity.id} className='activity-card'>
                <h2>{activity.activity_name}</h2>
                <p>category: {activity.category}</p>
                <p>participants: {activity.participants}</p>
                <p>link: {activity.link}</p>
                <CreateNotes activity_id={activity.id} user_id={user_id} addNoteToActivity={addNoteToActivity} />
            </div>
            <div>
            <NotesContainer activity={activity} deleteNoteFromActivity={deleteNoteFromActivity} user_id={user_id} />
            </div>        
        </section>
    )
}
