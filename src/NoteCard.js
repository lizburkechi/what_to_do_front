import React from 'react'


export default function NoteCard({ note, deleteNoteFromActivity, user_id }) {

    const deleteNote = () => {
        fetch (`http://localhost:3000/notes/${note.id}`, {
          method: "DELETE",
        })
        .then(resp => resp.json())
        .then((deletedNote) => {deleteNoteFromActivity(deletedNote)})
        // deleteNoteFromActivity();
      }
    return (
        <section>
            <div className='note-card'>
                <p>{note.content}</p>
                <p>@{note.username}</p>
                {user_id === note.user_id ? <button onClick={deleteNote}>x</button> : null}
            </div>
        </section>
    )
}
