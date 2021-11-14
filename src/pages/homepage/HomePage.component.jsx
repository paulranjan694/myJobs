import React, { Component } from 'react';
import Button from '../../components/button/Button.component';
import './HomePage.style.scss';

class HomePage extends Component {
   
    render() {
        console.log(this.props);
        const Style = {
            backgroundColor:'#43afff',
            color:'white',
            fontWeight: 500,
            fontSize:'18px'
        };
        return (
            <div className="homepage__container">
                <div className="homepage__firstPart">
                    <div className="firstpart__firstSection">
                        <p>Welcome to My<span className="title-style">Jobs</span></p>
                        <Button title="Get Started" Style={Style} url="/register" />
                    </div>
                    <div className="firstpart__secondSection">
                        <img src="https://image.freepik.com/free-photo/woman-working-from-home-laptop_1303-29267.jpg" alt="" />
                    </div>
                </div>
                <div className="homepage__secondPart">
                    <div className="secondPart__whyUs">
                        <div className="section__title">Why Us</div>
                        <div className="section__container">

                            <div className="section__card">
                                <div className="card__header">
                                    Get More Visibility
                                </div>
                                <div className="card__body">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem libero laborum nesciunt odit
                                </div>
                            </div>

                            <div className="section__card">
                                <div className="card__header">
                                    Organize your candidates
                                </div>
                                <div className="card__body">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem libero laborum nesciunt odit
                                </div>
                            </div>

                            <div className="section__card">
                                <div className="card__header">
                                    Verify Their Abilities
                                </div>
                                <div className="card__body">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem libero laborum nesciunt odit
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="secondPart__companiesWhoTrust">
                        <div className="section__title">
                            Companies Who Trust Us
                        </div>
                        <div className="section__container">
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL+"img/solaytic.png"} alt="" />
                            </div>
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL+"img/kanba.png"} alt="" />
                            </div>
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL+"img/lightAi.png"} alt="" />
                            </div>
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL+"img/ztos.png"} alt="" />
                            </div>
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL+"img/kanba.png"} alt="" />
                            </div>
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL+"img/goldline.png"} alt="" />
                            </div>
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL+"img/ideaa.png"} alt="" />
                            </div>
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL+"img/liva.png"} alt="" />
                            </div>
                            <div className="logo">
                                <img src={process.env.PUBLIC_URL+"img/velocity9.png"} alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
