import React, { Component } from "react";
import ReactDom from 'react-dom';
import YoutubeApiSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; //SearchBar bắt buộc viết hoa ký tự đầu tiên "S"
import VideoList from './components/video_list'; //SearchBar bắt buộc viết hoa ký tự đầu tiên "S"
const API_KEY = 'AIzaSyB4sG5i9jS3PC1pa4pj4ZjgG8XmjM8NVzE';

//create new compoment
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos: []
        }

        YoutubeApiSearch({key: API_KEY, term: 'surfboards'}, (videos)=>{
            this.setState({
                videos
            });
        });
    }

    render(){
        return (
            <div>
                <SearchBar/>
                <VideoList videos = { this.state.videos }/>
            </div>
        );
    }
} 

ReactDom.render(<App />, document.querySelector(".container"));