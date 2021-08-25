import React from 'react';
import '../Components/Main.scss'
import img1 from '../assets/img/bgfond5.jpg'
import img2 from '../assets/img/Layer 1.png'
import logo from '../assets/img/PicsArt_08-10-12.12.10.jpg'
import instagram from '../assets/icons/instagram.png'
import telegram from '../assets/icons/telegram (1).png'
import linkedin from '../assets/icons/linkedin.png'
import github from '../assets/icons/free-icon-github-733553.png'
import gitlab from '../assets/icons/icons8-gitlab-480.png'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


function parallax(event) {
    this.querySelectorAll('.img-1').forEach(value => {
        console.log(event)
        value.style.transform = `translate3d(${event.clientX / 50}px,${event.clientY / 50}px,0px)`
    })
    this.querySelectorAll('.img-2').forEach(value => {
        value.style.transform = `translate3d(${event.clientX / 100}px,${event.clientY / 100}px,0px)`
    })
}

document.addEventListener('mousemove', parallax)

const HomePage = () => {
    return (
        <div>
            <div className="container">

                <div className="left-header">
                    <p><img src={logo} alt="#"/></p>
                    <p><a href="#">CONTACT</a></p>
                    <p><a href="#">CONDITIONS</a></p>
                    <p><a href="#">PORTFOLIO</a></p>
                    <p><a href="#">ABOUT</a></p>
                    <p><a href="#">RU</a></p>
                    <hr/>
                    <p><a href="#">EN</a></p>
                </div>
                <div className="header">

                </div>
                <div className="right-header">
                    <img className={"img-1"} src={img1} alt=""/>
                    <img className={"img-2"} src={img2} alt=""/>
                    <div className="text">
                        <div className="text-header">
                            <Fade top >
                                <h3>Agizamov Oyatullox</h3>
                            </Fade>

                            <Fade top >
                                <div className={"icons"}>
                                    <div className="line">
                                    </div>
                                    <a href="#"><img src={instagram} alt=""/></a>
                                    <a href="https://t.me/Agizamov"><img src={telegram} alt=""/></a>
                                    <a href="#"><img src={linkedin} alt=""/></a>
                                    <a href="https://github.com/Oyatullox"><img src={github} alt=""/></a>
                                    <a href="https://gitlab.com/agizamovoyatullox789"><img src={gitlab} alt=""/></a>
                                </div>
                            </Fade>

                        </div>
                        <div className="text-body">
                            <Fade top big cascade>
                                <p>Hello</p>
                            </Fade>
                            <Fade right>
                                <hr/>
                            </Fade>
                            <Zoom left cascade>
                                <p>
                                    I specialise in designing responsive, secure and fully customised
                                </p>
                                <p>
                                    websites using simple and intuitive content management system.
                                </p>
                            </Zoom>
                        </div>
                        <div className="text-footer">
                            <div className="text-footer-left">
                                <Fade bottom>
                                    <p>
                                        Also find me at
                                    </p>
                                    <a href="https://experts.webflow.com/profile/blaise-posmyouck">
                                        webflow
                                    </a>
                                    <p>experts</p>
                                </Fade>
                            </div>
                            <div className="text-footer-right">
                                <div className="right-body-one">
                                    <Fade bottom>
                                        <p>E-mail :</p>
                                       <a href="#">
                                            agizamovoyatullox789@gmail.com
                                        </a>
                                    </Fade>
                                </div>

                                <div className="right-body-two">
                                    <Fade bottom >
                                        <p>Phone :</p>
                                        <a href="+998979901057">
                                            +998979901057
                                        </a>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;