import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import { logoutUser } from "../../redux/auth/auth.actions";
import "./Navbar.style.scss";

class Navbar extends Component {
  state={
    showLogoutDropdown : true
  }

  logoutHandler = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  }

  showHandler = () => {
    this.setState({showLogoutDropdown:!this.state.showLogoutDropdown});
  }

  render() {
    console.log(this.state);
    const { isLoggedIn, user} = this.props.auth;
    const { pathname} = this.props.location;
    return (
      <nav className="nav">
        <div className="nav__brand" >
          <Link to="/">
            My<span className="title__color">Jobs</span>
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="nav__auth__container">
          <div className={`postJob__link ${pathname=='/jobs'?'active':''}`}>
          <Link to="/jobs">
            Post a Job
          </Link>
          </div>
          <div className="user__profile">
            <div className="user__avatar">{user.name[0].toUpperCase()}</div>
            <div className="logout__icon" onClick={this.showHandler}><i class="fas fa-sort-down"></i></div>
         </div>
         <div className={`logout__dropdown ${this.state.showLogoutDropdown?'hide':''}`}>
           <div class="top__triangle"></div>
           <div className="logout__container" onClick={this.logoutHandler}>Logout</div>
         </div>
         </div>
        ) : (
          <Link className="nav__links" to="/login">
            Login/SignUp
          </Link>
        )}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};


export default compose(connect(mapStateToProps), withRouter)(Navbar);
