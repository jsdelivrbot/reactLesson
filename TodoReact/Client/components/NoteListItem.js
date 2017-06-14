import React from 'react';
import {connect} from 'react-redux';

class NoteListItem extends React.Component {
    remove(){
        // let {index, handleRemove} = this.props;
        // handleRemove(index);

        const { dispatch, index } = this.props;
        dispatch({
            type: 'REMOVE_NOTE',
            IndexRemoveNote: index
        })
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
export default connect(function(state){
    return state
})(NoteListItem);