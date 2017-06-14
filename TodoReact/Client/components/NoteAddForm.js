import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AddNewNoteAction, IsAddNewNoteAction} from '../actions/AddNewNoteAction';

class NoteAddForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            note : ""
            // isAdding: false
        };
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTonggle = this.onTonggle.bind(this);
    }
    onNoteChange(e){
        this.setState({note: e.target.value});
        
    }
    onSubmit(e){
        e.preventDefault();
        this.props.AddNewNoteAction(this.state.note);
        this.onTonggle();
        this.setState({note: ''});
    }
    onTonggle(){
        this.props.IsAddNewNoteAction(this.props.isAdding);
    }
    render(){
        if(this.props.isAdding){
            return(
                <div>
                <form onSubmit = {this.onSubmit}  action="">
                        <div className="input-group">
                            <input value = {this.state.note} onChange = {this.onNoteChange} type="text"/>
                            <button className="btn btn-primary">Add</button>
                        </div>
                </form>
                </div>
            );
        }
        else {
            return(
                <div>
                    <button onClick = {this.onTonggle} className="btn btn-success">+</button>
                </div>
            );
        }
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({AddNewNoteAction, IsAddNewNoteAction}, dispatch);
}

export default connect(function(state){
    return { isAdding: state.isAdding }
}, mapDispatchToProps)(NoteAddForm);