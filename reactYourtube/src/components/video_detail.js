import React, { Component } from 'react';

const VideoDetail = ({video})=>{
    if(!video) {
        return <div> loading . . . </div>;
    }
    console.log(video);
    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    return (
        <div className = "video-detail col-md-8">
            <div className="embed-reponsive embed-reponsive-16by9">
                <iframe className="embed-reponsive-item" src = { url }></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
                
            </div>
        </div>
    );
}

export default VideoDetail;