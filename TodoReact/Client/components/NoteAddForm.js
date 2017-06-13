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
    onAddNote(){
        e.prevenDefault();
        this.props.handleAddNote(this.state.note);
        this.setState({note: ''});
    }
    render(){
        return(
            <div>
               <h1>Add</h1>
               <form onSubmit = {e=>this.onAddNote(e)}  action="">
                    <div className="input-group">
                        <input onChange = {e=>this.onNoteChange(e)} type="text"/>
                        <button className="btn btn-primary">Add</button>
                    </div>
               </form>
            </div>
        );
    }
}
export default NoteAddForm;