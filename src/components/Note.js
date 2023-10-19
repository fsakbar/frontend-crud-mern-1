import notesStore from "../store/notesStore"



export default function Note({note}){
    const store = notesStore(store=>{
        return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate}

    });
    return(
        <div key = {note._id}>
        <h3>Title : {note.title}</h3>
        <h6>Body : {note.body}</h6>
        <button onClick={() => store.deleteNote(note._id)}>Delete note</button>
        <button onClick={() => store.toggleUpdate(note)}>Update note</button>
      </div>
    )
}