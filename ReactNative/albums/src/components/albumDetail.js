import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = (props) => (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    );

export default AlbumDetail;
