import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    MessageSaved: '',
    notes: [],
    active: null,
    // activa: {
    //   id: 'AB1',
    //   title: '',
    //   body: '',
    //   date: 1234,
    //   imageUrl: [],
    // }
  },
  reducers: {
    savingNewNote: ( state ) => {
      state.isSaving = true;
    },
    addNewEmptyNote: ( state, action ) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote: ( state, action ) => {
      state.active = action.payload;
    },
    setNotes: ( state, action ) => {
      state.notes = action.payload;
    },
    setSaving: ( state ) => {},
    updateNote: ( state, action ) => {},
    deleteNoteById: ( state, action ) => {},
  },
})

export const {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;