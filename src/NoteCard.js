import React from 'react'


export default function NoteCard({ note, deleteNoteFromActivity, user_id }) {

    const deleteNote = () => {
        fetch (`http://localhost:3000/notes/${note.id}`, {
          method: "DELETE",
        })
        .then(resp => resp.json())
        .then((deletedNote) => {deleteNoteFromActivity(deletedNote)})
      }
    return (
        <section>
            <div className='note-card'>
                <h5>{note.content}  @{note.username}</h5>
                {user_id === note.user_id ? <button className="delete-btn" onClick={deleteNote}>remove</button> : null}
            </div>
        </section>
    )
}
