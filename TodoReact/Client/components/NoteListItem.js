import React from 'react';
import {connect} from 'react-redux';
import {RemoveNoteActions} from '../actions/RemoveNoteAction';
import {bindActionCreators} from 'redux';
class NoteListItem extends React.Component {
    remove(){
       this.props.RemoveNoteActions(this.props.index);
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({ RemoveNoteActions }, dispatch);
}

export default connect(function(state){
    return state
}, mapDispatchToProps)(NoteListItem);