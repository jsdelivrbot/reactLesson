import React from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {userSignupRequest} from '../actions/signupActions';
import {bindActionCreators} from 'redux';
import validateInputUserSignup from '../../shared/validateInputUserSignup';
class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            gender: '',
            errors: {}
        }
        this.onUsernameChanged = this.onUsernameChanged.bind(this);
        this.onEmailChanged = this.onEmailChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.onPasswordConfirmChanged = this.onPasswordConfirmChanged.bind(this);
        this.onGenderChanged = this.onGenderChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onUsernameChanged(e){
        this.setState({username: e.target.value});
    }
    onEmailChanged(e){
        this.setState({email: e.target.value});
    }
    onPasswordChanged(e){
        this.setState({password: e.target.value});
    }
    onPasswordConfirmChanged(e){
        this.setState({passwordConfirm: e.target.value});
    }
    onGenderChanged(e){
        this.setState({gender: e.target.value});
    }
    onSubmit(e){
        this.setState({errors: {}});
        e.preventDefault();
        // axios.post('/api/users', {user: this.state});
        const {isValid, errors} = validateInputUserSignup(this.state);
        if(isValid){
            console.log(`is valid = ${isValid}`)
            this.props.userSignupRequest(this.state)
            .then(
                data=>{
                    if(data.error){
                        this.setState({errors: data.payload.response.data});
                    }
                }
            )
        }
        else{
            this.setState({errors: errors});
        }
        
    }
    render(){
        return (
            
            <form onSubmit = {this.onSubmit} action="" className = "text-center">
                <h1>Đăng Ký</h1>
                <div className="form-group">
                    <label className="control-label">Tên Đăng Nhập</label>
                    <input type="text" className="form-control" 
                    value = {this.state.username}
                    onChange = {this.onUsernameChanged}
                    name = "username" />
                    {this.state.errors.username && <span className = "help-block">{this.state.errors.username}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input type="email" className="form-control" 
                    value = {this.state.email}
                    onChange = {this.onEmailChanged}
                    name = "email" />
                    {this.state.errors.email && <span className = "help-block">{this.state.errors.email}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Mật Khẩu</label>
                    <input type="password" className="form-control" 
                    value = {this.state.password}
                    onChange = {this.onPasswordChanged}
                    name = "password" />
                    {this.state.errors.password && <span className = "help-block">{this.state.errors.password}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Nhập lại mật khẩu</label>
                    <input type="password" className="form-control" 
                    value = {this.state.passwordConfirm}
                    onChange = {this.onPasswordConfirmChanged}
                    name = "passwordConfirm" />
                </div>
                <div className="form-group">
                    <label className="control-label">Giới Tính</label>
                    <select name="gender" id="" className="form-control"
                    onChange = {this.onGenderChanged}
                    value = {this.state.gender} >
                        <option value="" disabled>Chọn giới tính của bạn</option>
                        <option key = "0" value="0">Nam</option>
                        <option key = "1" value="1" >Nữ</option>
                    </select>
                    {this.state.errors.password && <span className = "help-block">{this.state.errors.password}</span>}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Đăng ký</button>
                </div>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({ userSignupRequest}, dispatch);
}

export default connect((state)=> {return {}}, mapDispatchToProps)(SignupForm);
