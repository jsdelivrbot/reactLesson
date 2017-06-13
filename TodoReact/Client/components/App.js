import React from 'react';
import NoteList from './NoteList';

class App extends React.Component {
    render(){
        return(
            <div className = "container text-center">
            <h1>Basic Node React Redux Template</h1>
                <div className="col-md-4 col-md-offset-4"> 
                    <NoteList/>
                </div>
            </div>
        );
    }
}
export default App;