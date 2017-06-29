import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = (props) => {

    const { title, artist, thumbnail_image, image } = props.album;
    const { 
        headerContentStyle, 
        thumbnailStyle, 
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
         } = styles;
        return (
            <Card>
                <CardSection>
                    <View style = { thumbnailContainerStyle }>
                        <Image style = {thumbnailStyle} source = {{ uri: thumbnail_image }} />
                    </View>
                    <View style = { headerContentStyle }>
                        <Text style = { headerTextStyle }>{ title }</Text>
                        <Text>{ artist }</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image 
                    style = { imageStyle }
                    source = {{ uri: image }} />
                </CardSection>
            </Card>
        );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 20
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;
