import "./App.css";
import Navbar from "./components/navbar/Navbar.component";
import ForgetPasswordPage from "./pages/forget-password-page/ForgetPasswordPage.component";
import HomePage from "./pages/homepage/HomePage.component";
import LoginPage from "./pages/login-page/LoginPage.component";
import SignUpPage from "./pages/signup-page/SignUpPage.component";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ResetPasswordPage from "./pages/reset-password-page/ResetPasswordPage.component";

import React, { Component } from 'react'
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import { authenticateUser } from "./redux/auth/auth.actions";
import Dashboard from "./pages/dashboard/Dashboard.component";
import Jobs from "./pages/Jobs/Jobs.component";


const PrivateRoute = (privateRouteProps) => {
  const { isValid, path, component: Component, to } = privateRouteProps;

  return (
    <Route
      exact
      path={path}
      render={(props) => {
        return isValid ? <Component {...props} /> : <Redirect to={to} />;
      }}
    />
  );
};

class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem('token');
    if(token){
      const user = jwtDecode(token);
      this.props.dispatch(authenticateUser({
        id: user.id,
        email: user.email,
        userRole: user.userRole,
        name: user.name
      }));
    }
  }

  render() {
  const {auth} = this.props;
  console.log(auth);
    return (
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/forget-password" component={ForgetPasswordPage} />
        {/* <Route exact path="/jobs" component={Jobs} /> */}
        <PrivateRoute
              path="/reset-password"
              component={ResetPasswordPage}
              isValid={auth.isVerify}
              to="/login"
            />
        <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              isValid={auth.isLoggedIn}
              to="/login"
            />
            <PrivateRoute
              path="/jobs"
              component={Jobs}
              isValid={auth.isLoggedIn}
              to="/login"
            />
        <Route exact path="*" render={()=><h1>404 Not Found</h1>} />
      </Switch>
    </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(App);
