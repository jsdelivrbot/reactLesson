import React, { Component } from 'react';
import { CardSection } from './commons';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {
    state = {  }

    renderDescription() {
        const {library, selectedLibraryId} = this.props;
        if(library.id == selectedLibraryId) {
            return (
                <View>
                    <Text>{library.description}</Text>
                </View>
            );
        }
        return null;
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library
        return (
            <TouchableWithoutFeedback
                onPress = {()=> this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style = {titleStyle}>{this.props.library.title}</Text>
                    </CardSection>
                    <CardSection>
                        {this.renderDescription()}
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}
const mapStateToProps= state =>{
    console.log(state);
    return {
        selectedLibraryId: state.selectedLibraryId
    };
}
export default connect(mapStateToProps, actions)(ListItem);