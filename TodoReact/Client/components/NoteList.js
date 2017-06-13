import React from 'react';
import NoteListItem from './NoteListItem';
class NoteList extends React.Component {
    constructor(props){
        super(props);
        this.state = {mang: ['android', 'javascript', 'Nodejs','React']};
        this.rederItem = this.rederItem.bind(this);
    }
    rederItem(){
        return this.state.mang.map((e,i)=>{
            return <NoteListItem key = {i}>{e}</NoteListItem>
        });
    }
    render(){
        return(
            <div>
              {this.rederItem()}
            </div>
        );
    }
}
export default NoteList;