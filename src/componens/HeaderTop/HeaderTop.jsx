import React from 'react';
import "./HeaderTop.css";
import logo from '../../images/HeaderTopLogo.svg';
import planet from '../../images/PoukePlanet.svg';
import bgCar from '../../images/BgCar.png';
import wsApp from '../../images/WhatsApp.png';
import number from '../../images/Phone.png';
import mail from '../../images/mail.png';
import time from '../../images/Time.png';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import Section from '../Section';


const HeaderTop = () => {
    return (
        <div>
            <div className="headerTop">
                <div className="container">
                    <div className="nav">
                        <img className="logo" src={logo} />

                        <ul className='navList'>
                            <li className='navItem'>Обо мне </li>
                            <li className='navItem'>Методическое пособие</li>
                            <li className='navItem'>Статьи</li>
                            <li className='navItem'>Тест</li>
                        </ul>
                        <img src={planet} alt="planet" />
                    </div>

                    <div className="headerUnder">
                        <div className="headerDown">
                            <div className="HeaderUnderDescr">
                                <h3 className='headerDescr'>Персональные уроки по <br></br> вождению</h3>
                                <p className='downerP'>Практические занятия дают 80% результата в обучении.<br></br> Обучайтесь правильно и выгодно!</p>
                                <p>Получите полную консультацию по звонку!</p>
                            </div>
                            <div className="bgCar"><img src={bgCar} alt="redCar" /></div>
                        </div>
                        <div className="buttonsClient">
                            <button className='btnWsApp'><img src={wsApp} alt="WhatsApp" />WhatsApp</button>
                            <button className='contactNumber'><img src={number} alt="contactNumber" />0552 209 809</button>
                        </div>
                        <div className="workSchedule">
                            <p className='prgph'><img src={time} alt="time" />График работы   : ПН-ВС; 09:00-18:00</p>
                            <p className='maiil'><a href="#"><img src={mail} alt="mail" /> ruslanjakshylykov@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <HeaderBottom />
            <Section />
        </div>
    );
};

export default HeaderTop;