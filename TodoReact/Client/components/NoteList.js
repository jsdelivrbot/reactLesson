import React from 'react';
import NoteListItem from './NoteListItem';
import NoteAddForm from './NoteAddForm';
import {connect} from 'react-redux';

class NoteList extends React.Component {
    constructor(props){
        super(props);
        // this.state = {mang: ['android', 'javascript', 'Nodejs','React']};
        this.rederItem = this.rederItem.bind(this);
        // this.remove = this.remove.bind(this);
        // this.onAddNewNote = this.onAddNewNote.bind(this);
    }
    rederItem(){
        return this.props.mang.map((e,i)=>{
            /*
            Để cho phép component con truy xuất được phương thức remove trong NoteList. Ta cần tạo một props cho từng NoteListItem là handleRemove và chuyển tới component con. Trong component con sẽ bắt sự kiện click để gọi tới handelRemove qua đó gián tiếp gọi đến hàm remove trong NoteList
            */
            return <NoteListItem 
                index = {i}                
                key = {i}>{e}</NoteListItem>
        });
    }
    // remove(index){
    //     this.state.mang.splice(index, 1);
    //     this.setState(this.state);
    // }
    // onAddNewNote(note){
    //     //console.log(note);
    //     this.state.mang.push(note);
    //     this.setState(this.state);
    // }
    render(){
        return(
            <div>
            <NoteAddForm />
              {this.rederItem()}
            </div>
        );
    }
}
//Chuyển giá trị từ store.state vào props.state
export default connect(function(state){
    console.log("state ", state);
    console.log("this.state ", this.state);
    return {
        mang: state.mang
    }
})(NoteList);