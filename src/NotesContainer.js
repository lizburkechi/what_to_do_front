import React from 'react'
import NoteCard from './NoteCard'


export default function NotesContainer({ activity }) {

    const renderNotes = () => {
        return activity.notes.map(note => <NoteCard key={note.id} note={note} />);
    }

    return (
        <section className="notes-container">
            {renderNotes()}
        </section>
    )
}