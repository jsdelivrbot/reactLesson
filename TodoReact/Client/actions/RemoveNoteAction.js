export const REMOVE_NOTE = 'REMOVE_NOTE';
export function RemoveNoteActions (index){
    return {
        type: REMOVE_NOTE,
        IndexRemoveNote: index
    };
}