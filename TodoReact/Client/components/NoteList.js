import React from 'react';
import NoteListItem from './NoteListItem';
import NoteAddForm from './NoteAddForm';
class NoteList extends React.Component {
    constructor(props){
        super(props);
        this.state = {mang: ['android', 'javascript', 'Nodejs','React']};
        this.rederItem = this.rederItem.bind(this);
        this.remove = this.remove.bind(this);
        this.onAddNewNote = this.onAddNewNote.bind(this);
    }
    rederItem(){
        return this.state.mang.map((e,i)=>{
            /*
            Để cho phép component con truy xuất được phương thức remove trong NoteList. Ta cần tạo một props cho từng NoteListItem là handleRemove và chuyển tới component con. Trong component con sẽ bắt sự kiện click để gọi tới handelRemove qua đó gián tiếp gọi đến hàm remove trong NoteList
            */
            return <NoteListItem 
                index = {i}
                handleRemove = {this.remove}
                key = {i}>{e}</NoteListItem>
        });
    }
    remove(index){
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }
    onAddNewNote(note){
        //console.log(note);
        this.state.mang.push(note);
        this.setState(this.state);
    }
    render(){
        return(
            <div>
            <NoteAddForm handleAddNote = {this.onAddNewNote}/>
              {this.rederItem()}
            </div>
        );
    }
}
export default NoteList;