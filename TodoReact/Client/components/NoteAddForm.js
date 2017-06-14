import React from 'react';
class NoteAddForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { note : ""};
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAddNote = this.onAddNote.bind(this);
    }
    onNoteChange(e){
        this.setState({note: e.target.value});
    }
    onAddNote(e){
        e.preventDefault();
        this.props.handleAddNote(this.state.note);
        this.setState({note: ''});
    }
    render(){
        return(
            <div>
               <h1>Add</h1>
               <form onSubmit = {this.onAddNote}  action="">
                    <div className="input-group">
                        <input value = {this.state.note} onChange = {this.onNoteChange} type="text"/>
                        <button className="btn btn-primary">Add</button>
                    </div>
               </form>
            </div>
        );
    }
}
export default NoteAddForm;