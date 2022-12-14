import React from 'react'
import PropTypes from 'prop-types';
import {Form,Button} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component{
    state = {
        data:{
            email:'',
            password:''
        },
        loading:false,
        errors:{}
    };

    onchange = event => 
    this.setState({
        data: {...this.state.data,[event.target.name]:event.target.value}
    });

    onSubmit = () =>{
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (data.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }

    };
    validate = (data) =>{
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password)errors.password ="can't be blank";
        return errors;

    
    }
  
    render(){

        const {data, errors} = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
              <Form.Field error={!!errors.email}>
                <label htmlFor='email'>Email</label>
                <input 
                type='email' 
                id='email' 
                name='email'
                placeholder='winn@win.com'
                value={data.email}
                onchange={this.onchange}
                 />
                 {errors.email && <InlineError text= {errors.email} />}

                </Form.Field> 
                <Form.Field error={!!errors.password}>
                <label htmlFor='password'>Password</label>
                <input 
                type='password' 
                id='password' 
                name='password'
                placeholder='make it secure'
                value={data.password}
                onchange={this.onchange}
                 />
                 {errors.password && <InlineError text= {errors.password} />}
                 

                 </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
  
}
LoginForm.PropTypes = {
    submit:PropTypes.func.isRequired
};

export default LoginForm;
