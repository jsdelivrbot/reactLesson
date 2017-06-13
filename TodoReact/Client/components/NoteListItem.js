import React from 'react';
class NoteListItem extends React.Component {
    render(){
        return(
            <div>
               <p>{this.props.children}</p>
               <button>Delete</button>
            </div>
        );
    }
}
export default NoteListItem;