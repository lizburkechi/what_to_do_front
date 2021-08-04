import React from 'react'
import {useState} from 'react';
import ActivityCard from './ActivityCard'


export default function ActivitiesContainer({ addNoteToActivity, deleteNoteFromActivity, user_id, activities }) {

    const [searchInput, setSearchInput] = useState('');
    console.log(searchInput);

    const filteredActivities = activities.filter((activity) => {
        return activity.activity_name.toLowerCase().includes(searchInput);
    });
    console.log(filteredActivities);
    
    const activityCards = filteredActivities.map((activity) => { 
    return <ActivityCard
    key={activity.id} 
    activity={activity} 
    user_id={user_id} 
    addNoteToActivity={addNoteToActivity} 
    deleteNoteFromActivity={deleteNoteFromActivity} 
    />
    });

    function handleTextInput(e) {
        setSearchInput(e.target.value)
    }

    return (
        <section>
            <h2>Activities</h2>
            <div className="filter">
              <button>All</button>
              <button>Bars</button>
              <button>Education</button>
              <button>Music</button>
              <button>Recreation</button>
              <button>Relaxation</button>
              <button>Restaurants</button>
              <button>Sports</button>  
            </div>
            <input className='search-input' onChange={handleTextInput} type="text" placeholder="Search..." />
            <ul className="activity-cards">{activityCards}</ul>
        </section>
    )
}
