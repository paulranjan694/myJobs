import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Button from '../../components/button/Button.component';
import ConatinerHeader from '../../components/container-header/ConatinerHeader.component';
import InputField from '../../components/input-field/InputField.component';
import { clearAuthErrorState, resetPassword } from '../../redux/auth/auth.actions';
import './ForgetPasswordPage.style.scss'

class ForgetPasswordPage extends Component {

  constructor(props) {
    super();
    this.state = {
      email: "",
      isValidate:false
    };
  }

  componentWillUnmount(){
    this.setState({ isValidate:false });
    this.props.dispatch(clearAuthErrorState());
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ isValidate:false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {email} = this.state;
    console.log(this.state);
    if(email){
        this.props.dispatch(resetPassword(email));
    }else{
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
        const {auth} = this.props;
        if(auth.isVerify){
          return <Redirect to="/reset-password"/>;
        }

      return (
        <div className="forgetPasswordPage">
          <div className="forgetPasswordPage__topSection">
            <div className="forgetPassword__container">
              <ConatinerHeader title="Forget your Password ?"/>
              <div className="forgetPassword__body">
                <form onSubmit={this.handleSubmit}>
                  <div>Enter the email associated with your account and we’ll send you instructions to reset your password.</div>
                  <InputField label="Email Address" type="text" name="email" placeholder="Enter your email" changeHandler={this.handleChange} isValidate={this.state.isValidate} error="Invalid email address"/>
                  <div className="btn__group">
                    <Button title="Submit" Style={Style}/>
                  </div>
                </form>
 
              </div>
            </div>
          </div>
          <div className="forgetPasswordPage__bottomSection"></div>
        </div>
      );
    }
}

const mapStateToProps = state=> ({
  auth: state.auth,
})

export default connect(mapStateToProps)(ForgetPasswordPage);
