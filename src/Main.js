import React from 'react'
import ActivitiesContainer from './ActivitiesContainer'



export default function Main({ addNoteToActivity, deleteNoteFromActivity, activities, user_id }) {

    return (
        <main>
          <ActivitiesContainer activities={activities} user_id={user_id} addNoteToActivity={addNoteToActivity} deleteNoteFromActivity={deleteNoteFromActivity} /> 
        </main>
    )
}
