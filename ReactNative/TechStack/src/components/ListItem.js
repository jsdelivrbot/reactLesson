import React, { Component } from 'react';
import { CardSection } from './commons';
import {
    Text, 
    View, 
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {
    state = {  }
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDescription() {
        const {library, expanded} = this.props;
        if(expanded) {
            return (
                <CardSection style = {{ flex: 1 }}>
                    <Text>{library.description}</Text>
                </CardSection>
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
                        {this.renderDescription()}
                    
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
const mapStateToProps= (state, ownProps) =>{
    const expanded = state.selectedLibraryId === ownProps.library.id
    return {
        expanded
    };
}
export default connect(mapStateToProps, actions)(ListItem);