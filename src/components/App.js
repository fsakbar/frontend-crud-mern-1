import { useState, useEffect } from "react"; // Import useState? For What
import axios from 'axios'; // promise based http client for nodejs, this is pretty cool
import notesStore from "../store/notesStore";

function App() {
  const store = notesStore();

  // State
  const [notes, setNotes] = useState(null)

  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
  });

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  })

  // Everything put in here, is gonna run
  // Use Effect
  useEffect(() => {
    store.fetchNotes();
  }, [])


  // Function
  // Use Note From Server can Fetch
  const fetchNotes = async() => {
    // Fetch Note
    // Axios
    const res = await axios.get('http://localhost:3000/notes')
    // Set to State
    setNotes(res.data.notes);
    // Check in console localhost:3001
    // console.log(res)
  }
  // Use For From Field can filled.
  const updateCreateFormField = (event) => {
    const {name, value} = event.target;
    // console.log({name, value})
    // console.log("Hey")
    setCreateForm({
      ...createForm,
      [name]: value,
    })
  }
  const createNote = async (event) => {
    event.preventDefault();

    // Create the Note
    const res = await axios.post("http://localhost:3000/notes", createForm)

    // Update State
    setNotes([...notes, res.data.note]) // For Update Automaticly
    console.log(res)

    // Clear Form State
    setCreateForm({title: '', body: ''})
  }
  // Delete Note
  const deleteNote = async (_id) => {
    // Delete the note
    const res = await axios.delete(`http://localhost:3000/notes/:${_id}`)
    console.log(res)
    // Update State
    const newNotes = [...notes].filter(note => {
      return note._id !== _id;
    })

    setNotes(newNotes)
  }

  //handle Update
  // Use For From Field can filled.
  const handleUpdateFieldChange = async (event) => {
    const {value, name} = event.target

    setUpdateForm({
      ...updateForm,
      [name]: value, 
    })
  } 

  const toggleUpdate = (note) => {
    // console.log(note)
    // get State on update form //Get the current note value
    setUpdateForm({title: note.title, body: note.body, _id: note._id})
  }

  const updateNote = async (event) => {
    event.preventDefault()
    const {title, body} = updateForm;

    // Send the update reques
    const res = await axios.put(`http://localhost:3000/notes/${updateForm._id}`, {
      title,
      body,
    })

    console.log(res)
    // update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex(note=> {
      return note._id === updateForm._id;
    });

    newNotes[noteIndex] = res.data.note;
    setNotes(newNotes);

    // Clear Update Form State
    setUpdateForm({
      _id: null,
      title: '', 
      body: '',
    })

  }


  return (
    <div className="App">
    <div>
      <h2>Notes: </h2>
      {store.notes && store.notes.map(note => {
        return (
          <div key = {note._id}>
            <h3>Title : {note.title}</h3>
            <h6>Body : {note.body}</h6>
            <button onClick={() => store.deleteNote(note._id)}>Delete note</button>
            <button onClick={() => store.toggleUpdate(note)}>Update note</button>
          </div>
        )
      })}
      </div>

      {store.updateForm._id && (
      <div>
        <h2>Update Note</h2>
        <form onSubmit={store.updateNote}>
          <input onChange={store.handleUpdateFieldChange} value={store.updateForm.title} name = "title" />
          <textarea onChange={store.handleUpdateFieldChange} value={store.updateForm.body} name = "body" />
          <button  type="submit">Update Note</button>
        </form>
      </div>
      )}

      {!store.updateForm._id && (<div>
        <h2>Create Note</h2>
        <form onSubmit={store.createNote}>
          <input onChange={store.updateCreateFormField} value={store.createForm.title} name="title" />
          <textarea onChange={store.updateCreateFormField} value={store.createForm.body} name="body" />
          <button type="submit">create Note</button>
        </form>
      </div>
      )}
    </div>
      
  );
}

export default App;