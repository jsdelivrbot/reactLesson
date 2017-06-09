import lodash from 'lodash';
import React, { Component } from "react";
import ReactDom from 'react-dom';
import YoutubeApiSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';

import SearchBar from './components/search_bar'; //SearchBar bắt buộc viết hoa ký tự đầu tiên "S"
import VideoList from './components/video_list'; //SearchBar bắt buộc viết hoa ký tự đầu tiên "S"
const API_KEY = 'AIzaSyB4sG5i9jS3PC1pa4pj4ZjgG8XmjM8NVzE';

//create new compoment
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('surfboards');
        
    }

    videoSearch(term) {
        YoutubeApiSearch({key: API_KEY, term: term}, (videos)=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term)=>{ this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchInputChange = {term => videoSearch(term)} />
                <VideoDetail video = { this.state.selectedVideo } />
                <VideoList
                    onVideoSelect = { selectedVideo=> this.setState({selectedVideo}) }
                    videos = { this.state.videos }/>
            </div>
        );
    }
} 

ReactDom.render(<App />, document.querySelector(".container"));