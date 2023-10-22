import { create } from 'zustand';
import axios from 'axios';

const notesStore = create((set) => ({
    notes: null,

    createForm: {
        title: '',
        body: '',
    },

    updateForm: {
      title: '',
      body: '',
    },

    fetchNotes: async () => {
        // Fetch Note
        // Axios
        const res = await axios.get('/notes')
        // Set to State
        set({ notes: res.data.notes });
        
    },

    updateCreateFormField:  (event) => {
        const {name, value} = event.target;
        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]:value
                },
            };
        });
    },

    createNote: async (event) => {
        event.preventDefault();
        const {createForm, notes} = notesStore.getState();
        // Create the Note
        const res = await axios.post("/notes", createForm)
        // Update State
        set({
            notes: [...notes, res.data.note],
            createForm: {
                title: "",
                body: "",
            }
        });
        // Clear Form State
        
      },

      deleteNote: async (_id) => {
        // Delete the note
        const res = await axios.delete(`/notes/:${_id}`)
        const {notes} = notesStore.getState()
        // Update State
        const newNotes = notes.filter(note => {
          return note._id !== _id;
        })
    
        set({notes: newNotes})
        // setNotes(newNotes)
      },

      // to This
      handleUpdateFieldChange:async (event) => {
        const {value, name} = event.target
        set((state) => {
          return {
              updateForm: {
                  ...state.updateForm,
                  [name]:value
              },
          };
      });
      },



      toggleUpdate: (note) => {
        set({
          updateForm : {
            title: note.title,
            body: note.body, 
            _id: note._id
          }
        })
      },


      updateNote: async (event) => {
        event.preventDefault();

        const {
          updateForm: {title, body, _id},
          notes,
        } = notesStore.getState();


        // Send the update request
        const res = await axios.put(`/notes/${_id}`, {
          title,
          body,
        })
    
        // console.log(res)

        // update state
        const newNotes = [...notes];
        const noteIndex = notes.findIndex(note=> {
          return note._id === _id;
        });
        newNotes[noteIndex] = res.data.note;

        set({
          notes: newNotes,
          updateForm: {
          _id: null,
          title: '', 
          body: '',
          }
        })
      }
}))

export default notesStore;