import React from 'react'
import {useState} from 'react';
import ActivityCard from './ActivityCard'


export default function ActivitiesContainer({ addNoteToActivity, deleteNoteFromActivity, user_id, activities, buttonSearch, setButtonSearch }) {

    const [searchInput, setSearchInput] = useState('');
    let buttonFilterActivities = activities
    if(buttonSearch !== "all" ) {
        buttonFilterActivities = activities.filter(activity => {
            return activity.category === buttonSearch
        })
    }


    const filteredActivities = buttonFilterActivities.filter((activity) => {
        return activity.activity_name.toLowerCase().includes(searchInput);
    });
   
    
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

    function handleBtnClick(e) {
        setButtonSearch(e.target.value)
    }

    return (
        <section>
            <div className="filter">
              <button className="button" value='all' onClick={handleBtnClick}>All</button>
              <button className="button" value='bars' onClick={handleBtnClick}>Bars</button>
              <button className="button" value='education' onClick={handleBtnClick}>Education</button>
              <button className="button" value='music' onClick={handleBtnClick}>Music</button>
              <button className="button" value='recreation' onClick={handleBtnClick}>Recreation</button>
              <button className="button" value='relaxation' onClick={handleBtnClick}>Relaxation</button>
              <button className="button" value='restaurants' onClick={handleBtnClick}>Restaurants</button>
              <button className="button" value='sports' onClick={handleBtnClick}>Sports</button>
            </div>
            <div className="search-bar" >
            <div className="ui large fluid icon input">
                <input className='search-input' onChange={handleTextInput} type="text" placeholder="Search..." />
                <i className="circular search link icon"></i>
            </div>
            </div>
                <ul className="activity-cards">{activityCards}</ul>
        </section>
    )
}
