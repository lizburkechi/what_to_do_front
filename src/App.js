import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header'
import Home from './Home';
import Main from './Main';
import Login from './Login';
import 'semantic-ui-css/semantic.min.css'


const backendURL = 'http://localhost:3000';
const activitiesURL = `${backendURL}/activities`;


function App() {
  
  const [activities, setActivities] = useState([])
  const [userId, setUserId] = useState(1)
  const [buttonSearch, setButtonSearch] = useState('all')


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
      <Header />
      <Switch>
        <Route exact path="/" render={rp => <Home {...rp}/>} />
        <Route path="/login" render={rp => <Login {...rp} setUserId={setUserId} />} />
        <Route exact path="/main" render={rp => <Main {...rp} activities={activities} user_id={userId} addNoteToActivity={addNoteToActivity} deleteNoteFromActivity={deleteNoteFromActivity} setButtonSearch={setButtonSearch} buttonSearch={buttonSearch} />} />
      </Switch>
    </div>
  );
}

export default App;
