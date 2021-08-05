import React from 'react'
import ActivitiesContainer from './ActivitiesContainer'



export default function Main({ addNoteToActivity, deleteNoteFromActivity, activities, user_id, setButtonSearch, buttonSearch }) {

    return (
        <main>
          <ActivitiesContainer activities={activities} user_id={user_id} addNoteToActivity={addNoteToActivity} deleteNoteFromActivity={deleteNoteFromActivity} setButtonSearch={setButtonSearch} buttonSearch={buttonSearch}/> 
        </main>
    )
}
