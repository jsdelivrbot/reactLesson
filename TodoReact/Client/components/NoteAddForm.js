import React from 'react';
class NoteAddForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            note : "",
            isAdding: false
        };
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }
    onNoteChange(e){
        this.setState({note: e.target.value});
        
    }
    onSubmit(e){
        e.preventDefault();
        this.props.handleAddNote(this.state.note);
        this.setState({
            note: '',
            isAdding: !this.state.isAdding
        });
    }
    onAdd(){
        this.setState({isAdding: !this.state.isAdding});
    }
    render(){
        if(this.state.isAdding){
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
                    <button onClick = {this.onAdd} className="btn btn-success">+</button>
                </div>
            );
        }
    }
}
export default NoteAddForm;