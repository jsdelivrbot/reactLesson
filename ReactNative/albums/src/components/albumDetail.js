import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = (props) => {

    const { title, artist, thumbnail_image } = props.album;
    const { headerContentStyle, thumbnailStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <View>
                        <Image style = {thumbnailStyle} source = {{ uri: thumbnail_image }} />
                    </View>
                    <View style = { headerContentStyle }>
                        <Text>{ title }</Text>
                        <Text>{ artist }</Text>
                    </View>
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
    }
}

export default AlbumDetail;
