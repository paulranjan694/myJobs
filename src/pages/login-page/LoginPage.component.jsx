import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button.component";
import ContainerFooter from "../../components/container-footer/ContainerFooter.component";
import ConatinerHeader from "../../components/container-header/ConatinerHeader.component";
import InputField from "../../components/input-field/InputField.component";
import { clearAuthErrorState, login } from "../../redux/auth/auth.actions";
import "./LoginPage.style.scss";

class LoginPage extends Component {

  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      isValidate:false
    };
  }

  componentWillUnmount(){
    this.props.dispatch(clearAuthErrorState());
    this.setState({ isValidate:false });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ isValidate:false });
    this.props.dispatch(clearAuthErrorState());
  };

  handleSubmit = event => {
    event.preventDefault();
    const {email, password} = this.state;
    console.log(this.state);
    if(email && password){
      console.log("inside if");
        this.props.dispatch(login(email, password));
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
      const {isLoggedIn,Error} = this.props.auth;
      if(isLoggedIn){
        return <Redirect to="/dashboard"/>
      }

    return (
      <div className="loginPage">
        <div className="loginPage__topSection">
          <div className="login__container">
            <ConatinerHeader title="Login"/>
            <div className="login__body">
              <form onSubmit={this.handleSubmit}>
                <InputField label="Email Address" type="text" name="email" changeHandler={this.handleChange} placeholder="Enter your email" isValidate={this.state.isValidate || Error}/>
                <div className="forget__password"><Link to="/forget-password">Forget your password?</Link></div>
                <InputField label="Password" type="text" name="password" changeHandler={this.handleChange} placeholder="Enter your password" isValidate={this.state.isValidate || Error} error="Invalid email address or password"/>
                <div className="btn__group">
                  <Button title="Login" Style={Style}/>
                </div>
              </form>
            </div>
            <ContainerFooter text="New to MyJobs?" url={`/register`} value="Create an account"/>
          </div>
        </div>
        <div className="loginPage__bottomSection"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(LoginPage);
