import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
    state = { albums: [] }
    

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => this.setState({
            albums: res.data
        }));
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key = {album.title} album = {album} />);
    }

    render() {
        console.log("this.state.albums = ", this.state.albums);

        return (
            <ScrollView>
                <Text>Album List</Text>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
