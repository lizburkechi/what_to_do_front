import React from 'react'
import ActivityCard from './ActivityCard'


export default function ActivitiesContainer({ addNoteToActivity, deleteNoteFromActivity, user_id, activities }) {

    const renderActivities = () => {
        return activities.map(activity => <ActivityCard key={activity.id} activity={activity} user_id={user_id} addNoteToActivity={addNoteToActivity} deleteNoteFromActivity={deleteNoteFromActivity} />);
    }

    return (
        <section className="activities-container">
            {renderActivities()}
        </section>
    )
}
