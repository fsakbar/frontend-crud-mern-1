import notesStore from "../store/notesStore";
import Note from "./Note";

export default function Notes() {
    const store = notesStore();
    return (
        <div className="card-notes">
          <h2 className="">Notes: </h2>
          {store.notes && store.notes.map(note => {
            return (
            <Note note={note} key = {note._id} />
            );
          })}
        </div>
    );
}