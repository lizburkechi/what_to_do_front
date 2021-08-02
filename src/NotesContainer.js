import React from 'react'
import NoteCard from './NoteCard'


export default function NotesContainer({ activity, deleteNoteFromActivity, user_id }) {

    const renderNotes = () => {
        return activity.notes.map(note => <NoteCard key={note.id} note={note} deleteNoteFromActivity={deleteNoteFromActivity} user_id={user_id} />);
    }

    return (
        <section className="notes-container">
            {renderNotes()}
        </section>
    )
}