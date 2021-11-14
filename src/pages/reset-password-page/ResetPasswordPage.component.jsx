import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from '../../components/button/Button.component';
import ConatinerHeader from '../../components/container-header/ConatinerHeader.component';
import InputField from '../../components/input-field/InputField.component';
import { changePassword } from '../../redux/auth/auth.actions';
import './ResetPasswordPage.style.scss'

class ResetPasswordPage extends Component {

  constructor(props) {
    super();
    this.state = {
      password: "",
      confirmPassword:'',
      isValidate:false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ isValidate:false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {token} = this.props.auth;
    const {password, confirmPassword} = this.state;
    console.log(this.state);
    if(password && confirmPassword){
        this.props.dispatch(changePassword(password, confirmPassword, token));
    }else if(password !== confirmPassword) {
      this.setState({isValidate:true});
    }
  }

    render() {
        const Style={
          backgroundColor:'#43afff',
          color:'white',
          fontWeight: 500,
          fontSize:'18px'
        }
      return (
        <div className="resetPasswordPage">
          <div className="resetPasswordPage__topSection">
            <div className="resetPassword__container">
              <ConatinerHeader title="Rsest your Password"/>
              <div className="resetPassword__body">
                <form onSubmit={this.handleSubmit}>
                    <div className="resetPassword__text">Enter your new password below.</div>
                    <InputField label="New password" changeHandler={this.handleChange} type="text" name="password" placeholder="Enter your password" isValidate={this.state.isValidate}/>
                    <InputField label="Confirm new password" changeHandler={this.handleChange} type="text" name="confirmPassword" placeholder="Enter your password" isValidate={this.state.isValidate} error="Password mismatch"/>
                    <div className="btn__group">
                      <Button title="Reset" Style={Style}/>
                    </div>
                </form>
   
              </div>
            </div>
          </div>
          <div className="resetPasswordPage__bottomSection"></div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  auth:state.auth
})

export default connect(mapStateToProps)(ResetPasswordPage);
