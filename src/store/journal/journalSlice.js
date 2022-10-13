import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    MessageSaved: '',
    notes: [],
    activa: null,
    // activa: {
    //   id: 'AB1',
    //   title: '',
    //   body: '',
    //   date: 1234,
    //   imageUrl: [],
    // }
  },
  reducers: {
    addNewEmptyNote: ( state, action ) => {},
    setActiveNote: ( state, action ) => {},
    setNotes: ( state, action ) => {},
    setSaving: ( state ) => {},
    updateNote: ( state, action ) => {},
    deleteNoteById: ( state, action ) => {},
  },
})

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;