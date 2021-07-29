import React from 'react'
import NoteCard from './NoteCard'


export default function NotesContainer({ user_id, notes, setNotes }) {

    const renderNotes = () => {
        return notes.map(note => <NoteCard key={note.id} note={note} setNotes={setNotes} />);
    }

    return (
        <section className="notes-container">
            {renderNotes()}
        </section>
    )
}