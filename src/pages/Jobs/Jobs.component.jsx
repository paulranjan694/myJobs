import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button.component'
import ConatinerHeader from '../../components/container-header/ConatinerHeader.component';
import InputField from '../../components/input-field/InputField.component';
import TextArea from '../../components/textarea/TextArea.component';
import { createJob } from '../../redux/jobs/jobs.actions';
import './Jobs.style.scss'

class Jobs extends Component {

  constructor(props) {
    super();
    this.state = {
      title: "",
      description: "",
      location:"",
      isValidate:false
    };
  }

  componentWillUnmount(){
    this.setState({ isValidate:false });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({ isValidate:false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {title, description, location} = this.state;
    console.log(this.state);
    if(title && description && location){
        this.props.dispatch(createJob(title, description, location));
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
          return (
              <div className="jobs">
                <div className="jobs__topSection">
                     <div className="jobs__top_nav">
                       <Link to="/dashboard"><i class="fas fa-home"></i> Home</Link>
                      <i class="fas fa-chevron-right right-icon"></i> Jobs
                     </div>
                </div>
                <div className="jobs__bottomSection">
                <div className="postJobs__container">
                  <ConatinerHeader title="Post a Job"/>
                  <div className="postJobs__body">
                    <form onSubmit={this.handleSubmit}>
                      <InputField label="Job Title*" type="text" name="title" changeHandler={this.handleChange} placeholder="Enter job title" isValidate={this.state.isValidate}/>
                      <TextArea label="Description*" name="description" changeHandler={this.handleChange} placeholder="Enter job description" isValidate={this.state.isValidate} row="4" col="20" />
                      <InputField label="Location*" type="text" name="location" changeHandler={this.handleChange} placeholder="Enter location" isValidate={this.state.isValidate} error="All fields are mandatory."/>
                      <div className="btn__group">
                        <Button title="Post" Style={Style}/>
                      </div>
                    </form>
                  </div>
          </div>
                </div>
              </div>
            );
      }
}

export default connect(null,null)(Jobs);
