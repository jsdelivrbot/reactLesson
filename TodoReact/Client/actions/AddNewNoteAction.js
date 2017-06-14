// import {store} from 'redux';
export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const TOGGLE_IS_ADDING_NOTE = 'TOGGLE_IS_ADDING_NOTE';
export function AddNewNoteAction(newNote){
    console.log(newNote)
    return {
        type: ADD_NEW_NOTE,
        newNote: newNote
    };
}
export function IsAddNewNoteAction(isAdding){
    return {
        type: TOGGLE_IS_ADDING_NOTE,
        isAdding: !isAdding
    };
}