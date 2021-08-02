import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from './Main'
import Header from './Header';


const backendURL = 'http://localhost:3000';
const activitiesURL = `${backendURL}/activities`;


function App() {
  
  const [activities, setActivities] = useState([])
  const [userId, setUserId] = useState(1)


  const getActivities = () => {
    fetch(activitiesURL)
    .then(resp => resp.json())
    .then(setActivities)
  }

  useEffect(getActivities, [])

  const addNoteToActivity = (note) => {
   
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

    const deleteNoteFromActivity = (noteToDelete) => {

      let foundActivity = activities.find((activity) => {
        return activity.id === noteToDelete.activity_id
      })
      let newNotes = [...foundActivity.notes.filter((note) => note.id !== noteToDelete.id)]
      let copyOfActivity = {...foundActivity, notes:newNotes }
      replaceSingleActivity(copyOfActivity)  
  }
   

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
      <Header setUserId={setUserId} />
        </Route>
        <Route exact path='/Main'>
      <Main activities={activities} user_id={userId} addNoteToActivity={addNoteToActivity} deleteNoteFromActivity={deleteNoteFromActivity} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
