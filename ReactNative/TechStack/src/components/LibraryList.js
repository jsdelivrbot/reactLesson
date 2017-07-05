import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, ListView} from 'react-native';
import ListItem from './ListItem';


class LibraryList extends Component {
    state = {  }
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 != r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libriries)
    }
    renderRow(library) {
        return (
            <ListItem library = { library }/>
        );
    }
    render() {
        // console.log("this.props = ", this.props)
        return (
            <ListView 
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
            ></ListView>
        );
    }
}

const mapStateToProps = state => {
    // console.log("state = ", state)
    return {
        libriries: state.libriries
    }
}



export default connect(mapStateToProps)(LibraryList);