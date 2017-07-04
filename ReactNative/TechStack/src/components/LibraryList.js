import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, ListView} from 'react-native';

class LibraryList extends Component {
    state = {  }
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 != r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libriries)
    }
    renderRow() {
        
    }
    render() {
        return (
            <ListView 
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
            ></ListView>
        );
    }
}

const mapStateToProps = state => {
    return {
        libriries: state.libriries
    }
}

export default connect(mapStateToProps)(LibraryList);