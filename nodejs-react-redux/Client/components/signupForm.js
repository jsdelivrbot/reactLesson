import React from 'react';
import axios from 'axios';
class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            gender: ''
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
        e.preventDefault();
        axios.post('/api/users', {user: this.state});
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
                    name = "username" required/>
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input type="email" className="form-control" 
                    value = {this.state.email}
                    onChange = {this.onEmailChanged}
                    name = "email" required/>
                </div>
                <div className="form-group">
                    <label className="control-label">Mật Khẩu</label>
                    <input type="password" className="form-control" 
                    value = {this.state.password}
                    onChange = {this.onPasswordChanged}
                    name = "password" required/>
                </div>
                <div className="form-group">
                    <label className="control-label">Nhập lại mật khẩu</label>
                    <input type="password" className="form-control" 
                    value = {this.state.passwordConfirm}
                    onChange = {this.onPasswordConfirmChanged}
                    name = "passwordConfirm" required/>
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
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Đăng ký</button>
                </div>
            </form>
        );
    }
}

export default SignupForm;