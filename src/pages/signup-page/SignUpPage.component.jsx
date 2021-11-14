import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Button from "../../components/button/Button.component";
import ContainerFooter from "../../components/container-footer/ContainerFooter.component";
import ConatinerHeader from "../../components/container-header/ConatinerHeader.component";
import InputField from "../../components/input-field/InputField.component";
import { clearAuthErrorState, register } from "../../redux/auth/auth.actions";
import "./SignUpPage.style.scss";

class SignUpPage extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      userRole: null,
      password: "",
      confirmPassword: "",
      name: "",
      skills: "",
      isValidate:false
    };
  }

  componentWillUnmount(){
    this.props.dispatch(clearAuthErrorState());
    this.setState({isValidate:false})
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({isValidate:false})
    this.setState({ isValidate:false });
    this.props.dispatch(clearAuthErrorState());
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("inside");
    const {email, userRole, password, confirmPassword, name, skills} = this.state;
    if(email && ((userRole === 0) || (userRole === 1)) && password && confirmPassword && name && skills){
      console.log("inside if");
        this.props.dispatch(register(email, userRole, password, confirmPassword, name, skills));
    }else{
      this.setState({isValidate:true});
    }
  }

  render() {
    const Style = {
      backgroundColor: "#43afff",
      color: "white",
      fontWeight: 500,
      fontSize: "18px",
    };
    const {userRole} = this.state;
    const {isLoggedIn} = this.props.auth;
    if(isLoggedIn){
      return <Redirect to="/dashboard"/>
    }

    
    return (
      <div className="signupPage">
        <div className="signupPage__topSection">
          <div className="signup__container">
            <ConatinerHeader title="Signup" />

            <div className="signup__body">
              <form onSubmit={this.handleSubmit}>
                <div className="from__options">
                  <div className="options_text">I'm a*</div>
                  <div className="options">
                    <div className={`${(userRole ===0)? 'active' : ''} option`} onClick={()=> this.setState({userRole : 0})}>
                      <i class="fas fa-user-cog"></i> Recruiter
                    </div>
                    <div className={`${(userRole ===1)? 'active' : ''} option`} onClick={()=> this.setState({userRole : 1})}>
                      <i class="fas fa-users"></i> Candidate
                    </div>
                  </div>
                </div>
                <InputField
                  label="Full Name*"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  changeHandler={this.handleChange}
                  isValidate={this.state.isValidate}
                  error="The field is mandatory"
                />

                <InputField
                  label="Email Address*"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  changeHandler={this.handleChange}
                  isValidate={this.state.isValidate}
                  error="Invalid email address"
                />
                <div className="from__group">
                  <div className="col">
                    <InputField
                      label="Create Password*"
                      type="text"
                      name="password"
                      placeholder="Enter your password"
                      changeHandler={this.handleChange}
                      isValidate={this.state.isValidate}
                    />
                  </div>
                  <div className="col">
                    <InputField
                      label="Confirm Password*"
                      type="text"
                      name="confirmPassword"
                      placeholder="Enter your password"
                      changeHandler={this.handleChange}
                      isValidate={this.state.isValidate}
                      error="The field is mandatory"
                    />
                  </div>
                </div>
                <InputField
                  label="Skills"
                  type="text"
                  name="skills"
                  placeholder="Enter comma seperated skills"
                  changeHandler={this.handleChange}
                />
                <div className="btn__group">
                  <Button title="Signup" Style={Style}/>
                </div>
              </form>
            </div>

            <ContainerFooter
              text="Have an account?"
              url={`/login`}
              value="Login"
            />
          </div>
        </div>
        <div className="signupPage__bottomSection"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(SignUpPage);
