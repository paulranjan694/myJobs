import React, { Component } from 'react'
import './Dashboard.style.scss';
import Button from '../../components/button/Button.component'
import { connect } from 'react-redux';
import { loadJobs } from '../../redux/jobs/jobs.actions';
import JobCard from '../../components/job-card/JobCard.component';
import Backdrop from '../../components/backdrop/Backdrop.component';
import Modal from '../../components/modal/Modal.component';


class Dashboard extends Component {
    state={
      isModal:false,
    }
    componentWillMount() {
      this.props.dispatch(loadJobs());
    }

    openModalHandler = () => {
      this.setState({
        isModal: !this.state.isModal
      });
    }
    
    render() {
      const Style={
        backgroundColor:'#43afff',
        color:'white',
        fontWeight: 500,
        fontSize:'18px'
      }
      console.log(this.state);
        const {jobs}=this.props;
        let initailData = (
            <div className="emptyState__container">
              <div className="icon">
              <i class="fas fa-file-alt"></i>
              </div>
              <div className="emptyState__text">
              Your posted jobs will show here!
              </div>
              <Button title="Post a Job" Style={Style} url="/jobs"/>
          </div>
        );

        if(jobs){
          initailData = '';
        }
        return (
            <div className="dashboard">
              <Backdrop show={this.state.isModal} closeHandler={this.openModalHandler}/>
              <Modal isOpen={this.state.isModal}>
                <div className="modal__header">
                  <div className="modal__title">Applicants for this job</div>
                  <div className="cancel__Icon" onClick={this.openModalHandler}><i class="fas fa-times"></i></div>
                </div>

                <div className="modal__body">
                  <div className="no__of__applications">0 applications</div>
                  <div className="body__container">
                    <div className="emptyState">
                      <div className="body__icon">
                        <i class="fas fa-file-alt"></i>
                      </div>
                      <div className="body__text">
                      No applications available!
                      </div>
                    </div>
                  
                  </div>
                </div>


              </Modal>
              <div className="dashboard__topSection">
                   <div className="dashboard__top_nav">
                   <i class="fas fa-home"></i> Home
                   </div>
                   <div className="title">Jobs posted by you</div>
                   <div className="jobs__container">
                     {
                      Object.entries(jobs).map((job)=> <JobCard  key={job[0]} title={job[1].title} description={job[1].description} location={job[1].location} modalOpenHandler={this.openModalHandler}/>)
                     }
                      
                   </div>
              </div>
              <div className="dashboard__bottomSection">
                {
                  initailData
                }

              </div>
            </div>
          );
    }
}

const mapStateToProps = state => ({
  jobs:state.jobs,
  auth:state.auth
})

export default connect(mapStateToProps)(Dashboard);