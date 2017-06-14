import React from 'react';
import {connect} from 'react-redux';

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
        // this.props.handleAddNote(this.state.note);
        // this.setState({
        //     note: '',
        //     isAdding: !this.state.isAdding
        // });
        const {dispatch} = this.props;
        dispatch({
            type: 'ADD_NEW_NOTE',
            newNote: this.state.note
        });
        this.setState({ note: ''});
        this.onTonggle();
    }
    onTonggle(){
        // const dispatch = this.props.dispatch;
        const {dispatch} = this.props;
        dispatch({
            type: 'TOGGLE_IS_ADDING_NOTE'
        });
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
export default connect(function(state){
    return { isAdding: state.isAdding }
})(NoteAddForm);