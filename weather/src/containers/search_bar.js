import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
        //Nếu bỏ qua dòng mã này thì javascript sẽ hiểu từ khóa "this" chỉ tham chiếu trong phạm vi 
        //của phương thức onInputChange.
        //Từ khóa này chỉ cho javascript biết từ khóa this trong phương thức sẽ tham chiếu đến component
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
    render() {
        return (
            <form onSubmit = {this.onFormSubmit} className = "input-group">
                <input  className = "form-control"
                    placeholder = "text"
                    value = {this.state.term}
                    onChange = {this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type = "submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);