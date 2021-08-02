import React from 'react'
import {useState} from 'react';

export default function CreateNotes({ addNoteToActivity, activity_id, user_id }) {

    const [accNote, setAccNote] = useState('')

    const makeNote = (e) => {
        e.preventDefault();
    //  console.log(accNote)

       const options = {
            method: 'POST',
            headers: {
    
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
              content: accNote,
              activity_id: activity_id,
              user_id: user_id              
            })        
        }
     fetch('http://localhost:3000/notes', options) 
        .then(resp => resp.json())
        .then((newNote) => {addNoteToActivity(newNote)})
        
    }

    return (
        <form className='create-notes' onSubmit={makeNote}>
            <label htmlFor='create-acessibility-note'>Add Note: </label>
                <input 
                type='text' 
                id='acc-note' 
                placeholder='note'
                value={accNote}
                onChange={e => setAccNote(e.target.value)} 
                />
                <input type='submit' value='submit' />
        </form>
    )
}
