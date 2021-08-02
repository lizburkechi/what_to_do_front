import React from 'react'


export default function NoteCard({ note }) {

    return (
        <section>
            <div className='note-card'>
                <p>{note.content}</p>
                <p></p>
            </div>
        </section>
    )
}
