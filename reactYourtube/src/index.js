import React from "react";
import ReactDom from 'react-dom';
import YoutubeApiSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; //SearchBar bắt buộc viết hoa ký tự đầu tiên "S"
const API_KEY = 'AIzaSyB4sG5i9jS3PC1pa4pj4ZjgG8XmjM8NVzE';

YoutubeApiSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
})

//create new compoment
const App = ()=>{
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

ReactDom.render(<App />, document.querySelector(".container"));