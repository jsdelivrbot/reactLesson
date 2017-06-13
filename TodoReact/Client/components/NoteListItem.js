import React from 'react';
class NoteListItem extends React.Component {
    remove(){
        let {index, handleRemove} = this.props;
        handleRemove(index);
    }
    render(){
        return(
            <div>
               <p>{this.props.children}</p>
               <button onClick = {this.remove.bind(this)}>Delete</button>
            </div>
        );
    }
}
export default NoteListItem;