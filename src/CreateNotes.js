import React from 'react'
import {useState} from 'react';
import { Form} from 'semantic-ui-react'


export default function CreateNotes({ addNoteToActivity, activity_id, user_id }) {

    const [accNote, setAccNote] = useState('')

    const makeNote = (e) => {
        e.preventDefault();

        setAccNote (
            ""
        )

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
        <Form className='create-notes' onSubmit={makeNote}>
            <Form.Field>
                    <label htmlFor='create-acessibility-note'>Add Note: </label>
                        <input 
                        type='text' 
                        placeholder='note'
                        value={accNote}
                        onChange={e => setAccNote(e.target.value)} 
                        />
                    <input value ='submit'
                        style={{backgroundColor: '#D9C5A6', color: 'black'}} className="sub-button" type='submit'/>
            </Form.Field>
        </Form>
    )
}
