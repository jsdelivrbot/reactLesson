import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors = {};

    if(isEmpty(data.username)){
        errors.username = "bạn chưa nhập dữ liệu cho trường này";
    }
    if(isEmpty(data.email)){
        errors.email = "bạn chưa nhập dữ liệu cho trường này";
    }
    if(!Validator.isEmail){
        errors.email = "Chưa đúng định dạng email";
    }
    if(isEmpty(data.password)){
        errors.password = "bạn chưa nhập dữ liệu cho trường này";
    }
    if(!Validator.equals(data.password, data.passwordConfirm)){
        errors.password = "Bạn nhập mật khẩu không giống nhau";
    }
    if(isEmpty(data.gender)){
        errors.gender = "bạn chưa nhập dữ liệu cho trường này";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }

}