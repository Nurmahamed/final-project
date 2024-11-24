import React from 'react';
import './HeaderBottom.css';
import studySphere from '../../images/iconStudy.png';
import twentyFive from '../../images/25+.png';
import wheel from '../../images/iconWheel.png';
import time from '../../images/iconTime.png';
import RuslanImg from '../../images/RuslanImage.jpg';


const HeaderBottom = () => {
    return (
        <div>
            <div className="container">
                <div className="headerBottom">
                    <div className="sphereElements">
                        <div className="descrSpheres">
                           <div className="sphereFirst">
                            <img src={studySphere} alt="studySphere" />
                        </div> 
                        <p className='descrSphers'>1000+ довольных клиентов </p>
                        </div>
                        <div className="descrSpheres">
                        <div className="sphereSecond">
                            <img src={twentyFive} alt="studySphere" />
                        </div>
                        <p className='descrSphers'>Более 25 лет стаж работы</p>
                        </div>
                        <div className="descrSpheres">    
                        <div className="sphereThird">
                            <img src={wheel} alt="studySphere" />
                        </div>
                         <p className='descrSphers'>1.5 Часа - время одного занятия</p>
                        </div>
                        <div className="descrSpheres">    
                        <div className="sphereFourth">
                            <img src={time} alt="studySphere" />
                        </div>
                        <p className='descrSphers'>Занятия в удобное для вас время</p>
                        </div>
                    </div>
                    <div className="lineNovator">
                    <div className="line"></div>
                    </div>

                    <div className="headerBottomRuslan">
                        <div className="ruslanPhoto">
                            <img src={RuslanImg} alt="Ruslan" />
                        </div>

                        <div className="hisDescribe">
                            <h1 className='ruslanNm'>Руслан Жакшылыкович</h1>
                            <h6 className='Descr1'>Инструктор по вождению более 25 лет.</h6>
                            <p className='Descr2'>Омурбеков Руслан Жакшылыкович. Водительский стаж более 25 лет. Опыт преподавания и инструкторский стаж более 12 лет. Индивидуально подготовил практическому вождению 1500+ за 6 лет преподавания в автошколе выпустил более 1600+ студентов. Во время преподавания ПДД в автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана от 5.02.2022 года. Отталкиваясь от этих ошибок, составил свою методическое пособие по ПДД.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderBottom;