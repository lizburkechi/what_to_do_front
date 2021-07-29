import React from 'react'
import ActivitiesContainer from './ActivitiesContainer'



export default function Main({ addNoteToActivity, activities, user_id }) {

    return (
        <main>
          <ActivitiesContainer activities={activities} user_id={user_id} addNoteToActivity={addNoteToActivity} /> 
        </main>
    )
}
