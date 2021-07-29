import './App.css';
import { useState, useEffect } from 'react';
import Main from './Main'
import Header from './Header';


const backendURL = 'http://localhost:3000';
const activitiesURL = `${backendURL}/activities`;


function App() {
  
  const [activities, setActivities] = useState([])
  const [userId, setUserId] = useState(null)


  const getActivities = () => {
    fetch(activitiesURL)
    .then(resp => resp.json())
    .then(setActivities)
  }

  useEffect(getActivities, [])

  const addNoteToActivity = (note) => {
    // console.log(activities, note)
   
    let foundActivity = activities.find((activity) => {
      return activity.id === note.activity_id
    })
    let newNotes = [...foundActivity.notes, note]
    let copyOfActivity = {...foundActivity, notes:newNotes }
    replaceSingleActivity(copyOfActivity)  
  }
    const replaceSingleActivity = (newActivity) => {
     let copyOfActivities = activities.map((activity) => {
        if (activity.id === newActivity.id) {
          return newActivity
        }
        else {
          return activity
        }
      })
      setActivities(copyOfActivities)  
    }


    
  return (
    <div className="App">
      <Header setUserId={setUserId} />
      <Main activities={activities} user_id={userId} addNoteToActivity={addNoteToActivity} />
    </div>
  );
}

export default App;
